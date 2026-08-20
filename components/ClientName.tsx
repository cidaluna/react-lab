import { FC } from "react"

export const ClientName: FC<{ name: string, age:number }> = (props) => {
  return (
    <>
      <p>Sou a {props.name}!</p>
      <p>Tenho {props.age} anos.</p>
    </>
  );
}