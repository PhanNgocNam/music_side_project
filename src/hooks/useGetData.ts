import { useEffect, useState } from "react";
import { get } from "../utils/get";

export default function useGetData(url: string) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    handleGetData(url).then((result) => {
      if (data.length === 0) {
        setData(result);
      }
    });
  }, []);

  async function handleGetData(url: string) {
    const { data } = await get(url);
    return data;
  }

  return { data: data ? data : "Missing data..." };
}
