import * as React from 'react';
import { Header } from './components/header';

import './styles/vendor/normalize.css';
import './styles/vendor/flexboxgrid.min.css';
import './styles/general-styles.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <>
        <Header/>
        <main></main>
        <footer></footer>
      </>
    );
  }
}