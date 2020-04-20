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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, inventore corporis fuga soluta illo dignissimos aliquam molestiae quibusdam cupiditate repellat amet dolore et, possimus accusamus maiores repudiandae ipsa reprehenderit adipisci.</p>
                    </article>
                </div>
            </section>
        </main>
    )
}