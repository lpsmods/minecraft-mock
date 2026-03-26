export enum HttpRequestMethod {
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
}

export class HttpClient {
  cancelAll(reason: string) {}

  get(uri: string) {
    return this.request(new HttpRequest(uri).setMethod(HttpRequestMethod.GET));
  }

  request(config: HttpRequest) {
    return new Promise((resolve) => {
      const init = {};
      fetch(config.uri, init).then((res) => {
        res.text().then((body) => {
          const headers: HttpHeader[] = [];
          for (const [k, v] of res.headers.entries()) {
            headers.push(new HttpHeader(k, v));
          }
          resolve(new HttpResponse(body, headers, config, res.status));
        });
      });
    });
  }
}

export class HttpHeader {
  key: string;
  value: string;

  constructor(key: string, value: string) {
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

  addHeader(key: string, value: string) {
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
  constructor(
    body: string,
    headers: HttpHeader[],
    request: HttpRequest,
    status: number,
  ) {
    this.body = body;
    this.headers = headers;
    this.request = request;
    this.status = status;
  }
}

export const http = new HttpClient();
