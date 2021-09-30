import * as React from 'react'
import {AppState} from '../../../app'
import './burger.scss'

interface Props {
    onClick: any,
    open: boolean
}

export function Burger(props: Props){
    return (<div onClick={props.onClick} className={`burger ${props.open ? 'open' : 'close'}`}>
        <img className='open' src={`public/images/burger-open.svg`} />
        <img className='close' src={`public/images/close.svg`} />
    </div>)
}
