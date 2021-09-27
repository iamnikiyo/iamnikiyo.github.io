import * as React from 'react'
import './cta.scss'

interface Props {
    title: string,
    link?: string,
    type: string,
    breakpoints: string[]
}
export class Cta extends React.Component<Props> {
    
    constructor(props: Props){
        super(props)
    }

    addBreakpoints() {
        let breakpoints = ''
        this.props.breakpoints.map(point =>  breakpoints += `${point} `)
        return breakpoints
    }
    render(){
        return (<a className={`cta ${this.addBreakpoints()}`} href={this.props.link}><span>{this.props.title}</span></a>)
    }
}