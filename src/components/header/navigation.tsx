import * as React from 'react';

import '../../styles/modules/_navigation.scss';


export class Navigation extends React.Component {

    constructor (props){
        super(props);
    }

    render(){
        return (
            <>
                <ul className="navigation-links">
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Test</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Test</a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Test</a></li>
                </ul>
            </>
        )
    }
}