import * as React from 'react'

interface Props {
    items: [{type: string, link: string}]
}
export default class Social extends React.Component<Props> {

    constructor(props : Props){
        super(props)
    }

    generateSocialLinks() {
        let items = []
        this.props.items.map(item => items.push(<a className={`social-link ${item.type}`} href={item.link}>aa</a> ))
        return items
    }
    render() {
        return (
            <div className='social'>
                {this.generateSocialLinks()}
            </div>
        )
    }
}