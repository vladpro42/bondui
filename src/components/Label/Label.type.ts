import type React from "react";
import type { HTMLSize, HTMLVariant } from "../types";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  variant?: HTMLVariant;
  inputSize?: HTMLSize;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
