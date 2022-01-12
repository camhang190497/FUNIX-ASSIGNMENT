import React from 'react';
import { CardTitle, CardText, Row, Col, CardImg, CardBody, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';


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
                        <CardText>Phòng ban: {staff.department.name || staff.department}</CardText>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/nhanvien'>Nhân  viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.staff.name}</h3>
                        <hr/>
                    </div>
                
                    <div className="col-12">
                        <RenderStaff staff={props.staff} />
                    </div>
                </div>
            </div>
        );
        else 
        return(
            <div></div>
        )

    }
    



export default StaffDetail;