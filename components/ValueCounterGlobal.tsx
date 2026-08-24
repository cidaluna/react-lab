"use client";

import { useCounter } from '../context/CounterContext';

export const ValueCounterGlobal = () => {
  const { counter } = useCounter();

  return (
    <div className="grid gap-y-4">
      <p>Valor do contador global: {counter}</p>
    </div>
  )
}