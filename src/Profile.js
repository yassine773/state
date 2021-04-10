import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Profile extends Component{
 
  render(){
  return (
    <div className="App">
        <Img/>
        <Profession/>
        <Fullname/>
    </div>
  );
}
}
export default Profile;