"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type CounterContextType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

// 1. Inicie como undefined
export const CounterContext = createContext<CounterContextType | undefined>(undefined);

export default function CounterProvider({children}: { children: ReactNode }) {
  const [counter, setCounter] = useState(99);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

// 2. Crie um hook customizado para usar nos componentes
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error(":: useCounter deve ser usado dentro de um CounterProvider");
  return context;
};
