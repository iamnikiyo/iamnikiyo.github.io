import * as React from 'react'
import Hero from '../components/hero/hero'

export class Home extends React.Component {
    render() {
        return (
            <>
                <Hero title='Welcome' text='Im Nico, nice to meet you.' image='public/images/front-image.svg' type='main'/>
            </>
        )
    }
}

export default Home