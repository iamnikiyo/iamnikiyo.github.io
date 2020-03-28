import * as React from 'react';

import '../../styles/modules/_hero.scss';

export class Hero extends React.Component {

    constructor(props){
        super(props);
        this.state = {'animationComplete' : false}
    }
    componentDidMount(){
        this.consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);
    }

    consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
       
        window.setInterval(function() {
      
          if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
              var usedColor = colors.shift();
              colors.push(usedColor);
              var usedWord = words.shift();
              words.push(usedWord);
              x = 1;
              target.setAttribute('style', 'color:' + colors[0])
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
              x = -1;
              letterCount += x;
              waiting = false;
            }, 1000)
          } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
          }
        }, 120)
        window.setInterval(function() {
          if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
      
          } else {
            con.className = 'console-underscore'
      
            visible = true;
          }
        }, 400)
      }

    render(){

        return (
            <div className="row m-0">
                <div className="col-12 hero-banner">
                <div className='console-container'><span id='text'></span><div className='console-underscore' id='console'>&#95;</div></div>
                </div>
            </div>
        );
    }
}


