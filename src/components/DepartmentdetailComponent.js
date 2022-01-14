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
                    <CardTitle> {staff.name}</CardTitle>
                    
                    </CardBody>
                </Col>
                </Link>
            </Row>
        );
    }
    const DepartmentDetail = (props) => {
        
           
        
        if (props.staff != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/phongban'>Phòng  ban</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.department.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.department.name}</h3>
                        <hr/>
                    </div>
                
                    <div className="col-12">
                    <RenderStaffItem staff={props.staff}/>
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