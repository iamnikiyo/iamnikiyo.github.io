import * as React from 'react';


export class Hamburger extends React.Component {
    
    state = {activeClass: ''}

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
                    <h2>Menú</h2>
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