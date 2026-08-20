import { FC } from "react"

export const ClientName: FC<{ name: string }> = (props) => {
  return props.name === 'Cida' ? (<p>Sou a Cida</p>) : (<p>Sou outra pessoa.</p>)
}