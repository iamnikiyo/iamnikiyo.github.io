import * as React from 'react'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'
import './social.scss'

interface Props {
}
export default class Social extends React.Component<Props> {

    constructor(props : Props){
        super(props)
    }

    render() {
        return (
            <div className='social'>
               <a target='_blank' href='https://www.linkedin.com/in/nicolas-escobar-valle/'><SiLinkedin/></a>
               <a target='_blank' href='https://github.com/iamnikiyo'><SiGithub/></a>
               <a target='_blank' href='https://instagram.com/iamnikiyo'><SiInstagram/></a>
            </div>
        )
    }
}