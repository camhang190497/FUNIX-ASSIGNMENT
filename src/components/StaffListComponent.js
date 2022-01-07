import React, { Component } from 'react';


class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        const key = "name";
        const arrayUniqueByKey = [...new Map(this.props.staffs.map((item) => 
            [item[key], item])).values()];
        console.log(arrayUniqueByKey);
      
        const stafflist =arrayUniqueByKey.map((staff) => {
        
            return (
                <div className="col-12 col-sm-6 col-md-4" key={staff.id}>
                    <div style={{paddingTop:'5px'}}>
                        <li className="list-group-item">
                            {staff.name}
                        </li>
                    </div>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                  
                   {stafflist}
                   
                </div>
            </div>
        );
    }
}
export default StaffList;