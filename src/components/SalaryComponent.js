import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSalaryItem({staff}) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const totalsalary = parseInt((staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary), 10 );

    return(
        <div style={{paddingBottom:'15px'}}>
            <li className="list-group-item">
                <h4>{staff.name}</h4>
                <p>Mã nhân viên: {staff.id}</p>
                <p>Hệ số lương: {staff.salaryScale}</p>
                <p>Số giờ làm thêm: {staff.overTime}</p>
                <p><span>Lương: {totalsalary}</span></p>
            </li>
        </div>
    )
}

const Salary = (props) => {
    const salary = props.staffs.map((staff) => {
        return(
            <div key={staff.id} className="col-12 col-sm-6 col-md-4">
                <RenderSalaryItem staff={staff} />
            </div>
        );
    });
    return(
        <div>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Trangchu'>Trang  chủ</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Bảng  Lương</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Bảng  lương</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {salary}
                </div>

            </div>
        </div>
    )
}
export default Salary;