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
                <div>
                    <Card>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
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
        const key = "name";
        const arrayUniqueByKey = [...new Map(this.props.staffs.map((item) => 
            [item[key], item])).values()];
        console.log(arrayUniqueByKey);
      
        const stafflist =arrayUniqueByKey.map((staff) => {
        
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