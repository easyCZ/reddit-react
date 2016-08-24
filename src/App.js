import React, { Component } from 'react';

import Header from './header';
import Articles from './articles/ArticlesContainer.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Articles />
      </div>
    );
  }
}
