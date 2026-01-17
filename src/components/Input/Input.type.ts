import type React from "react";
import type { HTMLInputType, HTMLSize, HTMLVariant } from "../types";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: HTMLVariant;
  placeholder?: string;
  type: HTMLInputType;
  inputSize?: HTMLSize;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
