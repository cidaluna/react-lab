import { FC } from "react"

export const ClientName: FC<{ name: string }> = (props) => {
  return <p>{props.name}</p>
}