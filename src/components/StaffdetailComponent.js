import React from 'react';
import { CardTitle, CardText, Row, Col, CardImg, CardBody } from 'reactstrap';
import dateFormat from 'dateformat';


    function RenderStaff({staff}) {
        return(
            <Row className="row no-gutters">
                <Col className="col-6 col-sm-4 col-md-3">
                    <CardImg width="auto" src={staff.image} alt={staff.name}></CardImg>
                </Col>
                <Col className="col-12 col-sm-8 col-md-9">
                    <CardBody style={{paddingTop:'0px'}}>
                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Col>
            </Row>
        );
    }
    const StaffDetail = (props) => {
        if (props.staff != null)
        return (
            <div className="container">
                <div className="row">
                    <RenderStaff staff={props.staff} />
                </div>
            </div>
        );
        else 
        return(
            <div></div>
        )

    }
    



export default StaffDetail;