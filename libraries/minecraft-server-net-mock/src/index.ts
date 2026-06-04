export enum HttpRequestMethod {
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
}

export class HttpClient {
  private nextRequestId = 1;
  private readonly pendingRequests = new Map<
    number,
    {
      config: HttpRequest;
      reject: (reason?: unknown) => void;
      resolve: (response: HttpResponse) => void;
    }
  >();

  cancelAll(reason: string) {
    for (const [requestId, pending] of this.pendingRequests) {
      pending.reject(reason);
      this.pendingRequests.delete(requestId);
    }
  }

  get(uri: string) {
    return this.request(new HttpRequest(uri).setMethod(HttpRequestMethod.GET));
  }

  request(config: HttpRequest) {
    return new Promise<HttpResponse>((resolve, reject) => {
      const requestId = this.nextRequestId++;
      this.pendingRequests.set(requestId, { config, reject, resolve });

      const controller = config.timeout > 0 ? new AbortController() : undefined;
      const timeout =
        config.timeout > 0
          ? setTimeout(() => {
              this.pendingRequests.delete(requestId);
              controller?.abort();
              reject(`Request timed out after ${config.timeout} seconds.`);
            }, config.timeout * 1000)
          : undefined;

      fetch(config.uri, {
        body: config.body || undefined,
        headers: Object.fromEntries(config.headers.map((header) => [header.key, String(header.value)])),
        method: config.method,
        signal: controller?.signal,
      })
        .then((res) =>
          res.text().then((body) => {
            const headers: HttpHeader[] = [];
            for (const [k, v] of res.headers.entries()) {
              headers.push(new HttpHeader(k, v));
            }
            return new HttpResponse(body, headers, config, res.status);
          }),
        )
        .then(resolve, reject)
        .finally(() => {
          if (timeout !== undefined) {
            clearTimeout(timeout);
          }
          this.pendingRequests.delete(requestId);
        });
    });
  }

  testOnly_fulfillRequest(requestId: number, headers: HttpHeader[], body: string, status: number) {
    const pending = this.pendingRequests.get(requestId);
    if (pending === undefined) {
      return;
    }
    this.pendingRequests.delete(requestId);
    pending.resolve(new HttpResponse(body, headers, pending.config, status));
  }

  testOnly_getRequests() {
    return Array.from(this.pendingRequests.keys());
  }

  testOnly_rejectRequest(requestId: number, reason: string) {
    const pending = this.pendingRequests.get(requestId);
    if (pending === undefined) {
      return;
    }
    this.pendingRequests.delete(requestId);
    pending.reject(reason);
  }
}

export class HttpHeader {
  key: string;
  value: unknown;

  constructor(key: string, value: unknown) {
    this.key = key;
    this.value = value;
  }
}

export class HttpRequest {
  body = "";
  headers: HttpHeader[] = [];
  method: HttpRequestMethod = HttpRequestMethod.GET;
  timeout = 0;
  uri: string;

  addHeader(key: string, value: unknown) {
    this.headers.push(new HttpHeader(key, value));
    return this;
  }

  constructor(uri: string) {
    this.uri = uri;
  }

  setBody(body: string) {
    this.body = body;
    return this;
  }

  setHeaders(headers: HttpHeader[]) {
    this.headers = headers;
    return this;
  }

  setMethod(method: HttpRequestMethod) {
    this.method = method;
    return this;
  }

  setTimeout(timeout: number) {
    this.timeout = timeout;
    return this;
  }
}

export class HttpResponse {
  readonly body: string;
  readonly headers: HttpHeader[];
  readonly request: HttpRequest;
  readonly status: number;
  constructor(body: string, headers: HttpHeader[], request: HttpRequest, status: number) {
    this.body = body;
    this.headers = headers;
    this.request = request;
    this.status = status;
  }
}

export const http = new HttpClient();
