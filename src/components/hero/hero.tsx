import * as React from 'react'
import './hero.scss'

interface Props {
    title: string,
    text: string,
    image: string,
    type: string,
}

export class Hero extends React.Component<Props> {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={`hero-component ${this.props.type}`}>
                <div className='text-wrapper'>
                    <div className="title">{this.props.title}</div>
                    <div className="text">{this.props.text}</div>
                </div>
                <div className='image-wrapper'>
                    <img src={this.props.image} />
                </div>
            </div>
        )
    }


}

export default Hero;