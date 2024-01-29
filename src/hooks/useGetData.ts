import { useEffect, useState } from "react";
import { get } from "../utils/get";
import { ResponseDataTypes } from "../types/ResponseDataTypes";

export default function useGetData<T, V = []>(url: string, dependencies?: V[]) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    handleGetData(url)
      .then((result: ResponseDataTypes<T>) => {
        if (!data) {
          setData(result.data.data);
        }
      })
      .catch((err: Error) => console.log(err.message));
  }, [...[dependencies]]);

  async function handleGetData(url: string) {
    const { data } = await get(url);
    return data;
  }
  console.log(data);

  return data;
}
