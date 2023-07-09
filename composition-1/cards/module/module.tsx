import React from "react"

export interface CardProps {
    children: React.ReactNode,
    props: TProps
}


type TProps = {
    invisible: string,
    src: string
}