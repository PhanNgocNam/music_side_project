import { useState } from "react";

export default function useToggle<T>(defaultValue: T) {
  const [value, setValue] = useState<T | boolean>(defaultValue);

  function toggleValue(value: T) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
