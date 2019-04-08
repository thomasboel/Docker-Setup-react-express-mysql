import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiRes: "" };
  }

  getApiResult() {
    fetch('http://localhost:3001/test')
      .then(res => res.text())
      .then(res => this.setState({ apiRes: res }));
  }

  componentWillMount() {
    this.getApiResult();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.apiRes ?
            <h1>{this.state.apiRes}</h1>
            :
            <h1>If you're seeing this screen, something went wrong...</h1>}
        </header>
      </div>
    );
  }
}

export default App;
