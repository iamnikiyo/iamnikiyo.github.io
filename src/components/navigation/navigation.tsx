import * as React from 'react'
import {NavItem, NavItemProps} from './navItem'
import './navigation.scss'


interface Props {
    items: NavItemProps[]
}

export class Navigation extends React.Component<Props> {

    constructor(props){
        super(props)
    }

    generateItems(){
        let navItems = []

        this.props.items.map(elem => {
            navItems.push(<NavItem title={elem.title} link={elem.link}/>)
        })

        return navItems
    }

    render(){
        return (
            <div className="navigation">
                {this.generateItems()}
            </div>
        )
    }
}

export default Navigation;