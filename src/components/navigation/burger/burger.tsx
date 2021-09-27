import * as React from 'react'
import {AppState} from '../../../app'
import './burger.scss'

interface Props {
    onClick: any,
    open: boolean
}
export class Burger extends React.Component<Props> {

    constructor(props: Props){
        super(props)
    }

    render() {
        return (<div onClick={this.props.onClick} className={`burger ${this.props.open ? 'open' : 'close'}`}>
            <img className='open' src={`public/images/burger-open.svg`} />
            <img className='close' src={`public/images/close.svg`} />
        </div>)
    }
}