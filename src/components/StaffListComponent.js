import React from 'react';
import { Card, CardTitle, CardImg} from 'reactstrap';


    function RenderStaffItem({staff, onClick}) {
        return(
            <div style={{paddingBottom: '10px'}}>
            <Card onClick={() => onClick(staff.id)}>
                <CardImg src={staff.image} alt={staff.name}></CardImg>
                <CardTitle style={{textAlign:'center'}}>{staff.name}</CardTitle>
            </Card>
            </div>
        );
    }  

    const StaffList = (props) => {

        const stafflist = props.staffs.map((staff) => {
            return(
                <div key={staff.id} className="col-6 col-sm-4 col-md-2">
                    <RenderStaffItem staff={staff} onClick={props.onClick}/>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    {stafflist}
                </div>
                
            </div>

        )
    }

        
    



export default StaffList;