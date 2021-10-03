import * as React from 'react'
import './cta.scss'
import { Link } from 'react-router-dom'

interface Props {
    title: string,
    link?: string,
    breakpoints: any[],
    onClick?: any
}

export function Cta(props: Props) {
    const breakpoints = () => {
        let breakpoints = ''
        props.breakpoints.map(point =>  breakpoints += `${point} `)
        return breakpoints
    }
    return (
    <div className={`cta border-gradient ${breakpoints()}`}>
        {props.link ? 
            <Link to={props.link}>{props.title}</Link> 
            :
            <a href='#' onClick={props.onClick}>{props.title}</a>
        }
        
    </div>
        )
}
