import { Color, LinearGradientColor } from "./colors";

export const qualityColor = (quality: string | undefined) => {
  return Object.values(Color)[Object.keys(Color).indexOf(String(quality))];
};

export const gradientColor = (quality: string | undefined): string => {
  const linearGradientColor =
    Object.values(LinearGradientColor)[
      Object.keys(LinearGradientColor).indexOf(String(quality))
    ];
  if (linearGradientColor) {
    return linearGradientColor;
  } else {
    return "linear-gradient(to top, #545454 0%, rgba(30,255,0,0) 100%)";
  }
};
