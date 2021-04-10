import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Profile from './profile';

class App extends Component{
  constructor(){
    super();
    state={
      FullName :"yassine",
      Bio :"17 ans",
      Profession : "student",
      show : false
    }
  }
  render(){
  return (
    <div className="App">
    <Profile yessin={this.state}/>
    </div>
  );
}
}
export default App;
