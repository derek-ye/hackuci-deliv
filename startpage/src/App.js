import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="half">
          <div class="login-box">
            <div class="title">
              <h1>Hack UCI Application</h1>
            </div>
            <div class="form-label">
              <h2>Name</h2>
              <input type="text" placeholder="Name"></input>
            </div>
            <div class="form-label">
              <h2>Email</h2>
              <input type="text" placeholder="Email"></input>
            </div>
            <div class="form-label">
              <h2>Fun Fact</h2>
              <textarea placeholder="Fun Fact"></textarea>
            </div>

          </div>
        </div>
        <div class="half">
          <img src="petr.png" className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
