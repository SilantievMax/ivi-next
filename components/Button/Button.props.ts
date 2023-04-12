import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children?: ReactNode;
    img?: string;
    size?: "sm" | "b" | "img";
    color?: "disabled" | "included"
}