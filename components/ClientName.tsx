import { FC } from "react"

export const ClientName: FC<{ name: string, age:number, birthDateFake: Date }> = (props) => {
  return (
    <>
      <p>Sou a {props.name}!</p>
      <p>Tenho {props.age} anos, porque nasci em {props.birthDateFake.toLocaleDateString('pt-BR')}</p>
    </>
  );
}