import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DEPARTMENTS, STAFFS } from './shared/staffs';
import StaffList from './components/StaffListComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    };

  }
  render() {
    return (
      <div className="App">
       <Navbar dark color="success">
         <div className="container">
           <NavbarBrand href="/"
           >Ứng  dụng  quản  lí  nhân  sự  v1.0
           </NavbarBrand>
         </div>
       </Navbar>
       <StaffList staffs={this.state.staffs}/>
       <p style={{paddingLeft:'25px', paddingTop:'10px'}}
       >Bấm  vào  tên  nhân  viên  để  xem  thông  tin</p>
      </div>
    )
  }
}

export default App;
