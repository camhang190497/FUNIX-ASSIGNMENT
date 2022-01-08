import React from 'react';
import { Card, CardTitle, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderStaffItem({staff, onClick}) {
        return(
            <div style={{paddingBottom: '10px'}}>
            <Card>
                <Link to={`/nhanvien/${staff.id}`}>
                    <CardImg src={staff.image} alt={staff.name}></CardImg>
                    <CardTitle style={{textAlign:'center'}}>{staff.name}</CardTitle>
                </Link>
            </Card>
            </div>
        );
    }  

    const StaffList = (props) => {

        const stafflist = props.staffs.map((staff) => {
            return(
                <div key={staff.id} className="col-6 col-sm-4 col-md-2">
                    <RenderStaffItem staff={staff} />
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/trangchu'>Trang chủ</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Nhân  viên</BreadcrumbItem>
                    </Breadcrumb>
                    <div  className="col-12">
                        <h3>Nhân  viên</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {stafflist}
                </div>
                
            </div>

        )
    }

        
    



export default StaffList;