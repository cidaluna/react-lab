"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type CounterType = number | null;

type CounterContextType = {
  counter: CounterType;
  setCounter: Dispatch<SetStateAction<CounterType>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

function getInitialCounter(): CounterType {
  if (typeof window === "undefined") return null; // SSR não tem sessionStorage
  const counterSessionStorage = sessionStorage.getItem("counter");
  return counterSessionStorage !== null ? +counterSessionStorage : null;
}

export default function CounterProvider({ children }: { children: ReactNode }) {
  const [counter, setCounter] = useState<CounterType>(getInitialCounter);

  useEffect(() => {
    if (counter !== null) {
      sessionStorage.setItem("counter", counter.toString());
    }
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter deve ser usado dentro de um CounterProvider');
  }
  return context;
}