import axios, { AxiosRequestConfig } from "axios";
export async function get(url: string, config?: AxiosRequestConfig) {
  return await axios.get(url, config);
}
