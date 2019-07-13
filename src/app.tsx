import * as React from 'react';
import { Header } from './components/header/header';

import './styles/vendor/normalize.css';
import './styles/vendor/flexboxgrid.min.css';
import './styles/general-styles.scss';
import { Main } from './components/main/main';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <>
        <Header/>
        <Main/>
        <footer></footer>
      </>
    );
  }
}