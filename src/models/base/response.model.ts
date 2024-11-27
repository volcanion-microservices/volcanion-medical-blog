export interface ResponseModel<T> {
  succeeded: boolean;
  message: string;
  data: T;
  errorCode: number;
  detail: string;
  statusCode: number;
}