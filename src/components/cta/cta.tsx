import * as React from 'react'
import './cta.scss'

interface Props {
    title: string,
    link?: string,
    type: string
}
export class Cta extends React.Component<Props> {
    
    constructor(props){
        super(props)
    }

    render(){
        return (<a className='cta' href={this.props.link}>{this.props.title}</a>)
    }
}