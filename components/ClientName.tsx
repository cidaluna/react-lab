"use client"
import { FC } from "react"

type ClientNameProps = { name: string; age: number; birthDateFake: Date };

export const ClientName: FC<ClientNameProps> = (props) => {
  const { name, age, birthDateFake } = props;

  console.log("Teste", "Cida");
  return (
    <>
      <p>Sou a {name}! Tenho {age} anos, porque nasci em {birthDateFake.toLocaleDateString('pt-BR')}</p>
    </>
  );
}