import * as React from 'react'
import './cta.scss'

interface Props {
    title: string,
    link?: string,
    type: string,
    breakpoints: string[]
}
export class Cta extends React.Component<Props> {
    
    constructor(props){
        super(props)
    }

    render(){
        return (<a className={`cta ${this.props.breakpoints.map(point => point)}`} href={this.props.link}><span>{this.props.title}</span></a>)
    }
}