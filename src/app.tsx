import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/home'
import './styles/vendor/normalize.css';
import './styles/general-styles.scss';
import './styles/app.scss';
import { Navigation } from './components/navigation/navigation';
import { Cta } from './components/cta/cta';



export class App extends React.Component {
  navigation: any[];

  constructor(props) {
    super(props);
    this.navigation = [
      {
        title: 'Home', link: '/home'
      },
      {
        title: 'Who Am I', link: '/whoami'
      },
      {
        title: 'Skills', link: '/skills'
      },
      {
        title: 'Experience', link: '/experience'
      }
    ]

  }

  public render() {
    return (
      <div className='app'>
       <Router>
        <Switch>
            <Route path="/">
              <div className='top'>
                <Navigation items={this.navigation}/>
                <Cta title='Contact me' type='email' link='#' breakpoints={['desktop']}/>
              </div>
              <Home />
            </Route>
          </Switch>
       </Router>
      </div>
    );
  }
}