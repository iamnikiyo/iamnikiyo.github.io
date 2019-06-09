import * as React from 'react';

import '../styles/modules/_header.scss';
import { Hamburger } from './hamburger';

export class Header extends React.Component {

    constructor (props){
        super(props);
    }

    render(){
        return (
            <header>
                <div className="row end-xs navigation bg-grey">
                    <div className="col-xs-4 name"><span>Nicolás Escobar Valle</span></div>
                    <div className="col-xs-4 icon">
                        <Hamburger />
                    </div>
                </div>
                <div className="sidenav row bg-grey">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-1"><i class='uil uil-twitter'></i></div>
                    <div className="col-xs-1"><i class='uil uil-twitter'></i></div>
                </div>
            </header>
        )
    }
}