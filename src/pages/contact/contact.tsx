import * as React from 'react'
import { Email } from '../../components/email/email'

export function Contact() {

    return (
        <div className='contact'>
            <h1>Contact</h1>
            <Email image='public/images/email-pic.svg' 
                emailPlaceholder='Your email goes here...' 
                textPlaceholder='Add here your message :)'
                ctaText='Send'
            />
        </div>
    )
}