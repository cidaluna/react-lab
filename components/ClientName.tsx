import { FC } from "react"

type ClientNameProps = { name: string; age: number; birthDateFake: Date };

export const ClientName: FC<ClientNameProps> = (props) => {
  const { name, age, birthDateFake } = props;
  return (
    <>
      <p>Sou a {name}!</p>
      <p>Tenho {age} anos, porque nasci em {birthDateFake.toLocaleDateString('pt-BR')}</p>
    </>
  );
}