import React, { Component } from 'react';

import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentComponent';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      
    };
    }

    

    render() {

      const HomePage = () => {
        return(
          <Home />
        )
      }
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/trangchu" component={HomePage}/>
          <Route exact path="/nhanvien" component={() => <StaffList staffs={this.state.staffs}/>} />
          <Route exact path="/phongban" component={() => <DepartmentList departments={this.state.departments}/>} />
          <Route exact path="/bangluong" component={() => <Salary staffs={this.state.staffs}/>} />
          <Redirect to="/trangchu" />
        </Switch>
        <Footer />
      </div>
    )
    }
}

export default Main;
