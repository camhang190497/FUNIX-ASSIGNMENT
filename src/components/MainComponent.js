import React, { Component } from 'react';

import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffdetailComponent';
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
          <Home staff={this.state.staffs.filter((staff) => staff.id)[0]}
          department={this.state.departments.filter((department) => department.id)[0]}/>
        )
      }

      const StaffWithId = ({match}) => {
        return(
          <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0] }/>
        )
      }
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/trangchu" component={HomePage}/>
          <Route exact path="/nhanvien" component={() => <StaffList staffs={this.state.staffs}/>} />
          <Route path='/nhanvien/:staffId' component={StaffWithId} />
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
