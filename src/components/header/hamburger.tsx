import * as React from 'react';

import { getData } from '../../api/data';

export class Hamburger extends React.Component {
    
    state = {activeClass: '', data: {}}

    componentWillMount(){
        this.setState({data: getData('hamburger')});
    }

    handleState(ev){
        if(this.state.activeClass != 'is-active'){
            this.setState({activeClass: 'is-active'});
        }else{
            this.setState({activeClass: ''});
        }
    }

    render(){
        return (
            <>
                <button className={`hamburger hamburger--emphatic ${this.state.activeClass}`} onClick={this.handleState.bind(this)} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className={`hamburger-content ${this.state.activeClass}`}>
                    <h2>{this.state.data['menuLabel']}</h2>
                    <nav className="navigation">
                        <a href="">Nico loves Mary</a>
                        <a href="">Mary loves Nico</a>
                        <a href="">Nico is inlove with Mary</a>
                        <a href="">Mary is inlove with X</a>
                    </nav>
                </div>  
            </>
        )
    }
}