/**
 * 
 * @returns Нижнии опции - погода, посещаемое, Карта Германии, Телепрограмма, Эфир(настраивается через props)
 */

import { PropsWithChildren } from "react"

export const DownOption = ({children}:PropsWithChildren) => {
  return (
    <div>{children}</div>
  )
}
