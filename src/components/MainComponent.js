import React, { Component } from 'react';

import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
        <Header />
        <StaffList staffs={this.state.staffs}
          onClick={(staffId) => this.onStaffSelect(staffId)}/>
        <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]}/>
        <Footer />
      </div>
    )
    }
}

export default Main;
