import clsx, { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export const fn = (...classes: ClassArray) => {
  return twMerge(clsx(...classes));
};
