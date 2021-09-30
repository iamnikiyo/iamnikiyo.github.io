import * as React from 'react'
import './hero.scss'

interface Props {
    title: string,
    text: string,
    image: string,
    type: string,
}
export function Hero(props : Props){
    return (
        <div className={`hero-component ${props.type}`}>
            <div className='text-wrapper'>
                <div className="title">{props.title}</div>
                <div className="text">{props.text}</div>
            </div>
            <div className='image-wrapper'>
                <img src={props.image} />
            </div>
        </div>
    )
}
