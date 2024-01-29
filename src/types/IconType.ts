export type IconType = {
  width: number;
  height: number;
  fill?: string;
  classname?: string;
  onClick?: <T>(e: T) => void;
};
