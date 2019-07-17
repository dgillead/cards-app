import React from 'react';
import './App.css';
import Card from './Cards/Card.js'

class App extends React.Component {
  render(){
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

export default App;
