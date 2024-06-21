/* eslint-disable no-unused-vars */
import React from "react";

interface Option {
  value: string | number | boolean;
  label: string;
}

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  type: string;
  label?: string | null;
  value?: string | number | boolean | readonly string[] | null;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  id?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
  width?: string;
  options?: Option[];
  unit?: string | null;
}

export interface TextareaProps {
  label?: string | null;
  value?: string | null;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  maxLength?: number;
  minLength?: number;
}
