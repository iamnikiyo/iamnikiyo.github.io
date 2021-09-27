import * as React from 'react'
import {NavItem, NavItemProps} from './navItem'
import './navigation.scss'


interface Props {
    items: NavItemProps[],
    open: boolean
}

export class Navigation extends React.Component<Props> {

    constructor(props: Props){
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
            <div className={`navigation ${this.props.open ? 'open' : ''}`}>
                <h2>Navigation</h2>
                <div className="items">
                    {this.generateItems()}
                </div>
            </div>
        )
    }
}

export default Navigation;