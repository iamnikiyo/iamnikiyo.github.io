import * as React from 'react'
import {NavItem, NavItemProps} from './navItem'
import './navigation.scss'


interface Props {
    items: NavItemProps[],
    open: boolean
}

export function Navigation({items, open}: Props) {
    
    return (
        <div className={`navigation ${open ? 'open' : ''}`}>
            <h2>Navigation</h2>
            <div className="items">
                {items.map((elem) => (
                    <NavItem title={elem.title} link={elem.link}/>
                ))}
            </div>
        </div>
    )
}
