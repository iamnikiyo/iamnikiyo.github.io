import * as React from 'react';
import { TimelineLite } from "gsap";

import '../../styles/modules/_hero.scss';

export class Hero extends React.Component {

    componentDidMount(){
        window.onload = function(){
            const tl = new TimelineLite({delay: 1}),
              firstBg = document.querySelectorAll('.text-first-bg'),
              secBg = document.querySelectorAll('.text-second-bg'),
              word  = document.querySelectorAll('.text-word');
            
            tl
              .to(firstBg, 0.2, {scaleX:1})
              .to(secBg, 0.2, {scaleX:1})
              .to(word, 0.1, {opacity:1}, "-=0.1")  
              .to(firstBg, 0.2, {scaleX:0})
              .to(secBg, 0.2, {scaleX:0});
            
          }
    }
    render(){

        return (
            <div className="row m-0">
                <div className="col-12 hero-banner">
                    <h1 className="text">
                        <span className="text-first">
                            <span className="text-word">Hello </span>
                            <span className="text-first-bg"></span>
                        </span>
                        <br />
                        <span className="text-second">
                            <span className="text-word">World</span>
                            <span className="text-second-bg"></span>
                        </span>
                    </h1>
                </div>
            </div>
        );
    }
}