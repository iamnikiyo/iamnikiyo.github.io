import * as React from 'react';
import { Cta } from '../cta/cta';
import './email.scss'

interface Props {
    image: string,
    emailPlaceholder: string,
    textPlaceholder: string,
    ctaText: string
}
export function Email({image, emailPlaceholder, textPlaceholder, ctaText} : Props){

    return (
        <div className='email-area'>
            <div className='image'>
                <img src={image} />
            </div>
            <div className='form'>
                <div className="border-gradient">
                    <input className='item' type="email" name='email' placeholder={emailPlaceholder} />
                </div>
                <div className="border-gradient">
                    <textarea className='item' name="message" placeholder={textPlaceholder}></textarea>
                </div>
                <Cta title={ctaText} type='form' breakpoints={['mobile','tablet','desktop']} />
            </div>
        </div>
    )
}