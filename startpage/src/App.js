import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: "",
    email: "",
    fact: "",
    nameError: "",
    emailError: "",
    factError: ""
  }

  editName = (e) => {
    this.setState({name: e.target.value});
    this.setState({nameError: ""});
    console.log(e.target.value);
  }

  editEmail = (e) => {
    this.setState({email: e.target.value});
    this.setState({emailError: ""});
    console.log(e.target.value);
  }

  editFact = (e) => {
    this.setState({fact: e.target.value});
    this.setState({factError: ""});
    console.log(e.target.value);
  }

  submit = (e) => {
    if (this.isProblem()) {

    }
  }

  isProblem = () => {
    // check name
    if (this.state.name.length === 0) {
      this.setState({nameError: "Please enter a name"});
      return false;
    }
    // check emails
    if (this.state.email === "") {
      this.setState({emailError: "Please enter an email"});
      return false;
    }
    else if (this.state.email.length < 7) {
      this.setState({emailError: "Email is too short"});
      return false;
    }
    else if (this.state.email.slice(-4) !== ".com") {
      this.setState({emailError: "Email must be at a valid website"});
      return false;
    }
    else if (!this.state.email.includes("@")) {
      this.setState({emailError: "Not an email"});
      return false;
    }
    // check fact
    if (this.state.fact.length === 0) {
      this.setState({factError: "Please enter a fact"});
      return false;
    }

    return true;
  }

  render() {
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
              <h3>{this.state.nameError}</h3>
              <input type="text" placeholder="Name" value={this.state.name} onChange={this.editName}></input>
            </div>
            <div className="form-label">
              <h2>Email</h2>
              <h3>{this.state.emailError}</h3>
              <input type="text" placeholder="Email" value={this.state.email} onChange={this.editEmail}></input>
            </div>
            <div className="form-label">
              <h2>Fun Fact</h2>
              <h3>{this.state.factError}</h3>
              <textarea placeholder="Fun Fact" value={this.state.fact} onChange={this.editFact}></textarea>
            </div>
            <button className="submit-button" onClick={this.submit}>Submit</button>
          </div>
        </div>
        <div className="half">
          <img src="petr.png" className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
    );
  }
}

export default App;
