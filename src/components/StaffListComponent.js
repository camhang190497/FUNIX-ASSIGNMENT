import React, { Component } from 'react';
import { Card, CardTitle, CardImg, Button, Form, FormGroup, Input} from 'reactstrap';
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

    class StaffList extends Component {
        constructor(props) {
            super(props);

            this.state= {
                staffName: '',
                id: '',
                id: 0,
                name: '',
                doB: '',
                salaryScale: '',
                startDate: '',
                department: '',
                annualLeave:'' ,
                overTime: '',
                image: '/assets/images/alberto.png',

            }
            this.handleSearch = this.handleSearch.bind(this);
        }

    

        handleSearch(event) {
            const key = event.target.key.value;
           //alert(this.input.value)
           
            
            this.setState({ staffName: key})
            event.preventDefault();
        }
    
        render() {

            const stafflist = this.props.staffs
            .filter((staff) => {
                if (this.state.staffName === '') return staff;
                else if (staff.name.toLowerCase().includes(this.state.staffName.toLowerCase())) return staff;
                return 0;
            })
            .map((staff) => {
                return(
                    <div key={staff.id} className="col-6 col-sm-4 col-md-2">
                        <RenderStaffItem staff={staff} />
                    </div>
                )
            });

            return(
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-light bg-light justify-content-between">
                            <a className="navbar-brand">Nhân Viên</a>
                            <Button><i className="fa fa-plus fa-lg"></i></Button>
                            <Form className="form-inline"
                                onSubmit={this.handleSearch}
                            > 
                                <Input type="text" 
                                       id="searchkey" 
                                       name="key"
                                       className="form-control mr-sm-2" 
                                />
                                <Button className="btn btn-outline-success my-2 my-sm-0" 
                                        type="submit" 
                                        value="Submit"
                                >Search
                                </Button>
                            </Form>
                        </nav>
                    </div>
                   
                </div>
                <div className="row">
                    {stafflist}
                </div>
                
            </div>
            );
        }
    }

export default StaffList;