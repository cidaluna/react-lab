"use client";

import { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="grid gap-y-4">
      <h2 className="text-2xl">Contador</h2>
      <p>Número atual: {counter}</p>

      <div className="flex gap-x-2">
        <Button onClick={() => {
          setCounter((c) => c -3);
        }}>-3</Button>
        <Button onClick={() => {
          setCounter((c) => c -1);
        }}>-1</Button>
        <Button onClick={() => {
          setCounter((c) => c +1);
        }}>+1</Button>
        <Button onClick={() => {
          setCounter((c) => c +3);
        }}>+3</Button>
      </div>
    </div>
  )
}