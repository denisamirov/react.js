/**
 * 
 * @returns Новость
 */

import { PropsWithChildren } from "react"

export const New = ({children}:PropsWithChildren) => {
  return (
    <div className='flex'>
        <div>☼</div>
        <div>{children}</div>
    </div>
  )
}
