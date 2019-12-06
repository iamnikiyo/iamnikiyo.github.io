import * as React from 'react';

import '../../styles/modules/_header.scss';
import { Hamburger } from './hamburger';
import { getData } from '../../api/data';
import { Navigation } from './navigation';

export class Header extends React.Component {
    
    state = {
        data: {}
    }
    constructor (props){
        super(props);
    }

    componentWillMount(){
        this.setState({data: getData('header')});
    }

    render(){
        return (
            <header>
                <div className="row end-xs navigation bg-grey-lighter">
                    <div className="col-xs-4 nav-text"><span></span>{this.state.data["navigation"].name}</div>
                    <div className="col-xs-4 nav-text">
                        <Navigation/>
                    </div>
                    <div className="col-xs-4 icon">
                        <Hamburger/>
                    </div>
                </div>
            </header>
        )
    }
}