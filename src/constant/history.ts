import { Location, NavigateFunction } from "react-router-dom";

type HisoryType = {
  navigate: NavigateFunction | null;
  location: Location | null;
};

export const history: HisoryType = {
  navigate: null,
  location: null,
};
