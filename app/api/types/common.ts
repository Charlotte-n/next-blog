export interface CommonResponseType<T> {
  data: T;
  msg: string;
  code: number | string;
}
