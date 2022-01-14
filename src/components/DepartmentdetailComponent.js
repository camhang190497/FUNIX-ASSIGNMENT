import React from 'react';
import { CardTitle,  CardImg,  BreadcrumbItem, Breadcrumb, Card } from 'reactstrap';

import { Link } from 'react-router-dom';

    function RenderStaffItem({staff}) {
        return(
            <div style={{paddingBottom: '10px'}}>
                <Card >
                    <Link  to={`/nhanvien/${staff.id}`} >
                        <CardImg width="100%" src={staff.image} alt={staff.name}></CardImg>
                        <CardTitle style={{textAlign:'center'}}> {staff.name}</CardTitle>
                    </Link>
                </Card>
 
            </div>
        );
    }
    const DepartmentDetail = (props) => {
        const staffs = props.staff.map((val) => (
            <div className="col-6 col-sm-4 col-md-3">
                <RenderStaffItem staff={val} />
            </div>
        ))
           
        
        if (props.staff != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/phongban'>Phòng  ban</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.department.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3></h3>
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