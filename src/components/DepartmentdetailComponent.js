import React from 'react';
import { CardTitle,  Row, Col, CardImg, CardBody, BreadcrumbItem, Breadcrumb } from 'reactstrap';

import { Link } from 'react-router-dom';

    function RenderStaffItem({staff}) {
        return(
            <Row className="row no-gutters">
                <Link  to={`/nhanvien/${staff.id}`} >
                <Col className="col-6 col-sm-4 col-md-3">
                    <CardImg width="auto" src={staff.image} alt={staff.name}></CardImg>
                </Col>
                <Col className="col-12 col-sm-8 col-md-9">
                    <CardBody style={{paddingTop:'0px'}}>
                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                    
                    </CardBody>
                </Col>
                </Link>
            </Row>
        );
    }
    const DepartmentDetail = (props) => {
       const staffs = props.staff.map((val) => (
           <div key={val.id}>
               <RenderStaffItem staff={val} />
           </div>
       ))
        if (props.staff != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/phongban'>Phòng  ban</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dept.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dept.name}</h3>
                        <hr/>
                    </div>
                
                    <div className="col-12">
                        {staffs}
                    </div>
                </div>
            </div>
        );
        else 
        return(
            <div></div>
        )

    }
    



export default DepartmentDetail;