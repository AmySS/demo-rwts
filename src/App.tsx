import React, { Component } from 'react';
import Hello from './components/Hello';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

import { inject, observer } from 'mobx-react';

interface IProps {
  indexStore?: any
}

@inject('indexStore')
@observer class App extends Component<IProps, {}> {
  componentDidMount() {
    console.log(222);
  }
  
  render() {
    return (
      <div className="App">
        <Hello title="This is a tsx title"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{this.props.indexStore.counter}</h1>
          <button onClick={this.props.indexStore.addCounter}>click here</button>
          <button onClick={()=>this.props.indexStore.clearCounter()}>clear</button>
        </header>
        <div className="container">
          <h1>this is a test header.</h1>
          <p>this is description.</p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
