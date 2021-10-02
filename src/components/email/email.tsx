import * as React from 'react';

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
                <input type="email" name='email' placeholder={emailPlaceholder} />
                <textarea name="message" placeholder={textPlaceholder}></textarea>
                <button>{ctaText}</button>
            </div>
        </div>
    )
}