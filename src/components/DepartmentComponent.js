import React from 'react';

function RenderDepartmentItem({department}) {
    return(
        <div style={{paddingBottom:'20px'}}>
            <li className="list-group-item">
                <h3>{department.name}</h3>
                <p style={{textIndent:'10px'}}>Số lượng nhân viên: {department.numberOfStaff}</p>
            </li>
        </div>
    )
}

const DepartmentList = (props) => {
    const departmentlist = props.departments.map((department) => {
        return(
            <div className="col-12 col-sm-6 col-md-4" key={department.id}>
                <RenderDepartmentItem department={department} />
            </div>
        );
    });
    return(
        <div>
            <div className="container">
                <div className="row">

                </div>
                <div className="row">
                     {departmentlist}
                </div>

            </div>
        </div>
    )
}
export default DepartmentList;