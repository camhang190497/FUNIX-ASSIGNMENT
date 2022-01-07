import React, { Component } from 'react';
import { Card, CardTitle, CardText} from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }
    onStaffSelect(staff) {
        this.setState({selectedStaff: staff });
    }
    renderStaff(staff) {
        if (staff != null) {
            return(
                <div className="col-12 col-sm-6 col-md-4" 
                style={{paddingTop:'10px', textIndent:'25px'}}>
                    <Card key={staff.id}>
                        <CardTitle style={{paddingTop:'15px'}}>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText style={{paddingBottom:'15px'}}>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                </div>

            );  
        }
        else {
            return(
                <div></div>
            )
        }
    }


    render() {
        
      
        const stafflist =this.props.staffs.map((staff) => {
        
            return (
                <div className="col-12 col-sm-6 col-md-4" key={staff.id}>
                    <div style={{paddingTop:'5px'}}>
                        <li className="list-group-item"
                        onClick={() => this.onStaffSelect(staff)}>
                            {staff.name}
                        </li>
                    </div>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                   {stafflist}
                </div>
                <div className="row">
                   {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}
export default StaffList;