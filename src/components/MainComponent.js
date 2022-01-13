import React, { Component } from 'react';


import StaffList from './StaffListComponent';
import StaffDetail from './StaffdetailComponent';
import DepartmentList from './DepartmentComponent';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff,fetchStaffs, fetchDepartments } from '../redux/ActionCreators';
import DepartmentDetail from './DepartmentdetailComponent';
const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    
  }
}
const mapDispatchToProps = dispatch => ({
  
  addStaff: (staffId, name, doB, startDate, department, salaryScale, annualLeave, overTime) => dispatch(addStaff(staffId, name, doB, startDate, department,salaryScale, annualLeave, overTime)),
  fetchStaffs: () => { dispatch(fetchStaffs())},
  fetchDepartments: () => { dispatch(fetchDepartments())}
});

class Main extends Component {
    constructor(props) {
    super(props);

    
    }
    componentDidMount() {
      this.props.fetchStaffs();
      this.props.fetchDepartments();
    }

    

    render() {

      const HomePage = () => {
        return(
          <Home staff={this.props.staffs.staffs.filter((staff) => staff.id)[0]}
          department={this.props.departments.departments.filter((department) => department.id)[0]}/>
        )
      }

      const StaffWithId = ({match}) => {
        return(
          <StaffDetail staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0] }
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}/>
        )
      }
      const StaffWithDept =({match}) => {
        return(
          <DepartmentDetail 
          dept={this.props.departments.departments.filter((dept) => dept.id === match.params.deptId)[0]}
          staff={this.props.staffs.staffs.filter((staff) => staff.departmentId === parseInt(match.params.deptId,10))[0] }/>
        )
      }
    
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/trangchu" component={HomePage}/>
          <Route exact path="/nhanvien" component={() => <StaffList staffs={this.props.staffs.staffs} 
                addStaff={this.props.addStaff} />} />
          <Route path='/nhanvien/:staffId' component={StaffWithId} />
          <Route exact path="/phongban" component={() => <DepartmentList departments={this.props.departments.departments} 
                staffs={this.props.staffs.staffs} />} />
          <Route path='/phongban/:deptId' component={StaffWithDept} />
          <Route exact path="/bangluong" component={() => <Salary staffs={this.props.staffs}/>} />
          <Redirect to="/trangchu" />
        </Switch>
        <Footer />
      </div>
    )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
