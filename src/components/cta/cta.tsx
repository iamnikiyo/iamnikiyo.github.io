import * as React from 'react'
import './cta.scss'

interface Props {
    title: string,
    link?: string,
    type: string,
    breakpoints: any[]
}

export function Cta(props: Props) {
    const breakpoints = () => {
        let breakpoints = ''
        props.breakpoints.map(point =>  breakpoints += `${point} `)
        return breakpoints
    }
    return (<a className={`cta ${breakpoints()}`} href={props.link}><span>{props.title}</span></a>)
}
