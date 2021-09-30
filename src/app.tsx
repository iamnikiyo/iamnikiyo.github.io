import * as React from 'react'
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
import { Burger } from './components/navigation/burger/burger';
import { useState } from "react";

export interface AppState {
  navigationOpen: boolean
}

interface Props {

}

export function App() {

  const [navigation, setNavigation] = useState({
    navigationOpen: false,
    items: [
      {
        title: 'Home', link: '/'
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
  })

  const handleMobileNavigation = () => {
  
    setNavigation(prevNavigation => {
      return {...prevNavigation, navigationOpen: !prevNavigation.navigationOpen}
    })
  }

  return (
    <div className='app'>
     <Router>
      <Switch>
          <Route path="/">
            <div className='top'>
              <Burger open={navigation.navigationOpen} onClick={handleMobileNavigation}/>
              <Navigation open={navigation.navigationOpen} items={navigation.items}/>
              <Cta title='Contact me' type='email' link='#' breakpoints={['mobile','desktop']}/>
            </div>
            <Home />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}
