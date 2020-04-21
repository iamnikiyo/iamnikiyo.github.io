import * as React from 'react';
import { getData } from '../../api/data';

import '../../styles/modules/_hero.scss';


export class Hero extends React.Component {
      
  state = {
    data: {

    }
  }

  constructor(props){
      super(props);
  }
  componentWillMount(){
    this.setState({data: getData('hero')});
   
  }
  render(){
      return (
          <div className="row m-0">
              <div className="col-12 hero-banner">      
                <div className="animated-title">
                  <div className="text-top">
                    <div>
                      <span>{this.state.data['helloLabel']}</span>
                      <span className="normal">{this.state.data['nameLabel']}</span>
                    </div>
                  </div>
                  <div className="text-bottom">
                    <div>{this.state.data['meetLabel']}</div>
                  </div>
                </div>
                  <video autoPlay loop muted src="public/video/hero2.mp4"></video>
                  <div className="scroll-wrap">
                    <a className="scroll-btn" href="#">
                      <span></span>
                      {this.state.data['scrollLabel']}
                    </a>
                  </div>
              </div>
          </div>
      );
  }
}


