"use client";

import { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [something, setSomething] = useState("");

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

      <div className="flex gap-x-2">
        <input className="px-4 py-1 border border-gray-500" value={something} onChange={(e) => {
          setSomething(e.target.value);
        }} />
        <Button onClick={() => {
          setSomething("");
        }}>Limpar</Button>
      </div>
    </div>
  )
}