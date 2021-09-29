import * as React from 'react'
import Hero from '../components/hero/hero'
import Social from '../components/social/social'

export class Home extends React.Component {

    render() {
        return (
            <div className='home'>
                <Hero title='Welcome' text='Im Nico, nice to meet you.' image='public/images/front-image.svg' type='main'/>
                <Social/>
            </div>
        )
    }
}

export default Home