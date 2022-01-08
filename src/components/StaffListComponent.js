import React, { Component } from 'react';
import { Card, CardTitle, CardImg, Button, Form, FormGroup, Input, ModalHeader, ModalBody,Label, Modal, Col} from 'reactstrap';
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
                isNavOpen: false,
                isModalOpen: false,

            }
            this.toggleNav = this.toggleNav.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSearch = this.handleSearch.bind(this);
        }
        toggleNav() {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            });
        }
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
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
                            <Button outline onClick={this.toggleModal}>
                                <i className="fa fa-plus fa-lg"></i>
                            </Button>
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

                <div className="row row-content">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>
                            <div className="col-12 col-md-9">
                                <Form>
                                    <FormGroup row>
                                        <Label htmlFor="name" md={4}>Tên</Label>
                                        <Col md={8}>
                                            <Input type="text" id="name" name="name"
                                                placeholder="Name"
                                                value={this.state.name}
                                                />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                        <Col md={8}>
                                            <Input type="date" id="doB" name="doB"
                                                placeholder="doB"
                                                value={this.state.doB}
                                                />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                        <Col md={8}>
                                            <Input type="date" id="startDate" name="startDate"
                                                placeholder="startDate"
                                                value={this.state.startDate}
                                                />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="department" md={4}>Phòng ban</Label>
                                        <Col md={8}>
                                            <Input type="select" id="department" name="department"
                                                placeholder="department"
                                                value={this.state.department}
                                                >
                                                    <option>Sale</option>
                                                    <option>HR</option>
                                                    <option>Marketing</option>
                                                    <option>IT</option>
                                                    <option>Finance</option>
                                            </Input>
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                        <Col md={8}>
                                            <Input type="text" id="salaryScale" name="salaryScale"
                                                placeholder="1.0 -> 3.0"
                                                value={this.state.salaryScale}
                                                />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                        <Col md={8}>
                                            <Input type="text" id="annuaLeave" name="annualLeave"
                                                placeholder="0"
                                                value={this.state.annualLeave}
                                                />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                        <Col md={8}>
                                            <Input type="text" id="overTime" name="overTime"
                                                placeholder="0"
                                                value={this.state.overTime}
                                                />
                                        </Col>                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Thêm
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </ModalBody>

                    </Modal>

                </div>
                
            </div>
            );
        }
    }

export default StaffList;