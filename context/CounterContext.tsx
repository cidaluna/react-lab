"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

type CounterType = number | null;

type CounterContextType = {
  counter: CounterType;
  setCounter: Dispatch<SetStateAction<CounterType>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

export default function CounterProvider({ children }: { children: ReactNode }) {
  const [counter, setCounter] = useState<CounterType>(null);

  useEffect(() => {
    const counterSessionStorage = sessionStorage.getItem("counter") ?? 0;
    console.log('counterSessionStorage', counterSessionStorage);
    if (counterSessionStorage !== null) {
      setCounter(+counterSessionStorage);
    }
  }, []);

  useEffect(() => {
    if (counter) {
      sessionStorage.setItem("counter", counter.toString());
    }
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

// 3. Hook customizado para consumo seguro nos componentes da aplicação
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error(":: useCounter deve ser usado dentro de um CounterProvider");
  }
  return context;
};
