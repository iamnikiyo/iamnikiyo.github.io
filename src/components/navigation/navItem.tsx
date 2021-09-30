import * as React from 'react'

export interface NavItemProps {
    title: string,
    link: string
}

export function NavItem({title, link}: NavItemProps){
    return (<a href={link} className='nav-link'>{title}</a>)

}