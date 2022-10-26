import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/assets/css/normalize.css';
import Form from "../src/components/01_atoms/form/form.js";
// import PrimaryButton from "../src/components/01_atoms/buttons/primaryButton/primaryButton.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form>dfdsfsdf</Form>
      </header>
    </div>
  );
}

export default App;
