import * as React from 'react';
import { Hero } from './hero';


export const Main = () => {
    return(
        <main className="container-fluid p-0">
            <Hero />
            <section>
                <div className="container">
                    <article className="col-12">
                        <h2>Skills</h2>
                        <picture>
                            <img src="public/images/macbook.svg" alt=""/>
                        </picture>
                    </article>
                </div>
            </section>
        </main>
    )
}