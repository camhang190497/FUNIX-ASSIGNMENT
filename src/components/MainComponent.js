import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffdetailComponent';

class Main extends Component {
    constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      selectedStaff: null
    };
    }

    onStaffSelect(staffId) {
    this.setState({ selectedStaff: staffId })
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
       <StaffList staffs={this.state.staffs}
          onClick={(staffId) => this.onStaffSelect(staffId)}/>
       <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]}/>
      </div>
    )
    }
}

export default Main;
