import { ForwardedRef } from "react";

export function checkNotNullRef<T>(ref: ForwardedRef<T>): boolean {
  if (ref && "current" in ref && ref.current) return true;
  return false;
}
