/**
 * 
 * @returns Реклама сбоку сверху и посередине(настраивается через props)
 */

import { PropsWithChildren } from "react"


export const Advertising = ({children}:PropsWithChildren) => {
  return (
    <div>{children}</div>
  )
}
