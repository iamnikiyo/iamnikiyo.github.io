import * as React from 'react';

import '../../styles/modules/_hero.scss';
/*import videoFile from '../../static/hero.mp4';*/

export class Hero extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){

        return (
            <div className="row m-0">
                <div className="col-12 hero-banner">      
                  <div className="animated-title">
                    <div className="text-top">
                      <div>
                        <span>Hello</span>
                        <span className="normal">I'm Nico</span>
                      </div>
                    </div>
                    <div className="text-bottom">
                      <div>Nice to meet you</div>
                    </div>
                  </div>
                    <video autoPlay loop muted src="public/video/hero2.mp4"></video>
                </div>
            </div>
        );
    }
}


