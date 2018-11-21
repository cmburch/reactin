import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

// import logo from './logo.svg';
// import './app/layout/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Reactin</h1>
        <button className="ui icon button">
          <i className="smile icon"></i>
          CSS Button 
        </button>
        <Button icon ="smile" content="React Button"></Button>
      </div>
    );
  }
}

export default App;
