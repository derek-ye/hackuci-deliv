import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  // const txtFieldState = {
  //   value: "",
  //   valid: true,
  //   errMsg: "" //this is where our error message gets across
  // };
  


  // document.addEventListener('submit-button', submit);
  return (
    <div className="App">
      <header className="App-header">
        <div className="half">
          <div className="login-box">
            <div className="title">
              <h1>Hack UCI Application</h1>
            </div>
            <div className="form-label">
              <h2>Name</h2>
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="form-label">
              <h2>Email</h2>
              <input type="text" placeholder="Email"></input>
            </div>
            <div className="form-label">
              <h2>Fun Fact</h2>
              
              <textarea placeholder="Fun Fact"></textarea>
            </div>
            <button className="submit-button">Submit</button>
          </div>
        </div>
        <div className="half">
          <img src="petr.png" className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
