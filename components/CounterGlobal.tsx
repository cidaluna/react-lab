"use client";

import { useCounter } from "@/context/CounterContext";
import { Button } from "./Button";

export const CounterGlobal = () => {
  const { counter, setCounter } = useCounter();

  return (
    <div className="grid gap-y-4">
          <h2 className="text-2xl">Contador Global</h2>
          <p>Número atual: {counter}</p>
    
          <div className="flex gap-x-2">
            <Button onClick={() => {
              setCounter((c) => (c ?? 0) -3);
            }}>-3</Button>
            <Button onClick={() => {
              setCounter((c) => (c ?? 0) -1);
            }}>-1</Button>
            <Button onClick={() => {
              setCounter((c) => (c ?? 0) +1);
            }}>+1</Button>
            <Button onClick={() => {
              setCounter((c) => (c ?? 0) +3);
            }}>+3</Button>
          </div>
    
    </div>
  )
}