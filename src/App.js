import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar dark color="success">
         <div className="container">
           <NavbarBrand href="/">Ứng  dụng  quản  lí  nhân  sự  v1.0</NavbarBrand>
         </div>
       </Navbar>
      </div>
    )
  }
}

export default App;
