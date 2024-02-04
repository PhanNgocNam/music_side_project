import { useEffect, useState } from "react";
import { get } from "../utils/get";

export default function useGetData<T, V = undefined>(
  url: string,
  dependencies: V[]
) {
  const [returnData, setReturnData] = useState<T | null>(null);
  useEffect(() => {
    (async function () {
      const { data } = await get(url);
      if (returnData === null) setReturnData(data);
    })();
  }, [...dependencies]);

  return returnData;
}
