import * as React from 'react';


export class Hamburger extends React.Component {
    constructor (props){
        super(props);
    }

    handleState(ev){
        const obj = document.getElementsByClassName('hamburger')[0];
        const activeClass = 'is-active';
        if(obj.classList.contains(activeClass)){
            obj.classList.remove(activeClass);
        }else{
            obj.classList.add(activeClass);
        }
    }

    render(){
        return (
            <button className="hamburger hamburger--emphatic" onClick={this.handleState} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>  
        )
    }
}