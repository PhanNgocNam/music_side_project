export type ResponseDataTypes<T> = {
  result: number;
  data: {
    err: number;
    msg: string;
    data: T;
    timestamp: number;
  };
};
