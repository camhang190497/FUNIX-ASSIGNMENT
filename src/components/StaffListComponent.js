import React, { Component } from 'react';
import { Card, CardTitle, CardImg} from 'reactstrap';

class StaffList extends Component {
    constructor(props){
        super(props);
    }

    render() {

        const stafflist = this.props.staffs.map((staff) => {
            return(
                <div key={staff.id} className="">
                    <Card onClick={() => this.props.onClick(staff.id)}>
                        <CardImg src={staff.image} alt={staff.name}></CardImg>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
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
}


export default StaffList;