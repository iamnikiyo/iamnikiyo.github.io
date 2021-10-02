import * as React from 'react'
import { Link } from 'react-router-dom'

export interface NavItemProps {
    title: string,
    link: string
}

export function NavItem({title, link}: NavItemProps){
    return (
        <div className='nav-link'>
            <Link to={link}>{title}</Link>
        </div>
    )

}