"use client";

import { FC, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button className="border border-blue-500 px-4 py-1 rounded cursor-pointer bg-blue-500 hover:bg-blue-800 text-white" onClick={onClick}>
    {children}
  </button>
)