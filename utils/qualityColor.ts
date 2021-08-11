import { Color, LinearGradientColor } from "./colors";

export const qualityColor = (quality: string | undefined) => {
  return Object.values(Color)[Object.keys(Color).indexOf(String(quality))];
};

export const gradientColor = (quality: string | undefined) => {
  return Object.values(LinearGradientColor)[
    Object.keys(LinearGradientColor).indexOf(String(quality))
  ];
};
