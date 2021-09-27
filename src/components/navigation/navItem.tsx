import * as React from 'react'

export interface NavItemProps {
    title: string,
    link: string
}

export class NavItem extends React.Component<NavItemProps> {

    constructor(props: NavItemProps){
        super(props)
    }

    render(){
        return (<a href={this.props.link} className='nav-link'>{this.props.title}</a>)
    }
}

export default NavItem