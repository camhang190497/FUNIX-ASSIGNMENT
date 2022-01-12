import React, { Component } from 'react';
import { Card, CardTitle, CardImg, Button, Form,  Input, ModalHeader, ModalBody,Label, Modal, Col, Row, FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

    function RenderStaffItem({staff}) {
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
                doB: '',
               
                startDate: '',
                department: '',
                annualLeave: 0 ,
                overTime: 0,
                image: '/assets/images/alberto.png',
                isNavOpen: false,
                isModalOpen: false,
                touched: {
                    
                    doB: false,
                    startDate: false,
                }

            }
            this.toggleNav = this.toggleNav.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
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
        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });
        }
        handleSubmit = (value) => {
            //event.preventDefault();
            const newStaff = {
                name: value.name,
                doB: this.state.doB,
                salaryScale: value.salaryScale,
                startDate: this.state.startDate,
                department: value.department,
                annualLeave: value.annualLeave,
                overTime: value.overTime,
                image: '/assets/images/alberto.png',
            };
            if (  !this.state.doB || !this.state.startDate) 
                this.setState({
                    touched: {
                            doB:true,
                            startDate:true
                    }
            })
            else
                this.props.postStaff(newStaff);

            
        }

    

        handleSearch(event) {
            const key = event.target.key.value;
           //alert(this.input.value)
           
            
            this.setState({ staffName: key})
            event.preventDefault();
        }

        handleBlur = (field) => (evt) => {
            this.setState({
                touched: { ...this.state.touched, [field]: true }
            });
        }
        validate( doB, startDate) {
            const errors = {
                
                doB: '',
                startDate: '',
            };
           
            
            if (this.state.touched.doB && doB.length < 2)
                errors.doB = 'Yêu cầu nhập';

            if (this.state.touched.startDate && startDate.length < 2)
                errors.startDate = 'Yêu cầu nhập';
            return errors;
        }

    
        render() {
            
            const errors = this.validate(
                
                this.state.doB, 
                this.state.startDate
            );

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
                            <p className="navbar-brand" >Nhân Viên</p>
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
                                <LocalForm onSubmit={this.handleSubmit}>
                                    <Row className="form-group">
                                        <Label htmlFor="name" md={4}>Tên</Label>
                                        <Col md={8}>
                                            <Control.text model=".name" id="name" name="name"
                                                placeholder="Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(2), maxLength: maxLength(15)
                                                }}
                                                />
                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                messages={{
                                                    required: 'Yêu  cầu  nhập',
                                                    minLength: 'Phải  nhiều  hơn  2 kí  tự',
                                                    maxLength: 'Phải  ít  hơn  15 kí  tự'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                        <Col md={8}>
                                            <Input type="date" id="doB" name="doB"
                                                placeholder="doB"
                                                value={this.state.doB}
                                                valid={errors.doB === ''}
                                                invalid={errors.doB !== ''}
                                                onBlur={this.handleBlur('doB')}
                                                onChange={this.handleInputChange}
                                                />
                                            <FormFeedback>{errors.doB}</FormFeedback>
                                        </Col>                        
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                        <Col md={8}>
                                            <Input type="date" id="startDate" name="startDate"
                                                placeholder="startDate"
                                                value={this.state.startDate}
                                                valid={errors.startDate === ''}
                                                invalid={errors.startDate !== ''}
                                                onBlur={this.handleBlur('startDate')}
                                                onChange={this.handleInputChange}
                                                />
                                            <FormFeedback>{errors.startDate}</FormFeedback>
                                        </Col>                        
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="department" md={4}>Phòng ban</Label>
                                        <Col md={8}>
                                            <Control.select model=".department" id="department" name="department"
                                                placeholder="department"
                                                className="form-control"
                                                >
                                                    <option>Sale</option>
                                                    <option>HR</option>
                                                    <option>Marketing</option>
                                                    <option>IT</option>
                                                    <option>Finance</option>
                                            </Control.select>
                                        </Col>                        
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                        <Col md={8}>
                                            <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                                placeholder="1.0 -> 3.0"
                                                defaultValue="1"
                                                className="form-control"
                                                validators={{
                                                    required,  isNumber
                                                }}
                                                />
                                            <Errors
                                                className="text-danger"
                                                model=".salaryScale"
                                                show="touched"
                                                messages={{
                                                    required: 'Yêu  cầu  nhập',
                                                    isNumber: 'Phải  là  một  số'
                                                }}
                                            />
                                        </Col>                        
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                        <Col md={8}>
                                            <Control.text model=".annuaLeave" id="annuaLeave" name="annualLeave"
                                                //defaultValue="0"
                                                className="form-control"
                                                validators={{
                                                    required,  isNumber
                                                }}
                                                />
                                            <Errors
                                                className="text-danger"
                                                model=".annuaLeave"
                                                show="touched"
                                                messages={{
                                                    required: 'Yêu  cầu  nhập',
                                                    isNumber: 'Phải  là  một  số'
                                                }}
                                            />
                                        </Col>                        
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="overTime" md={4}>Số ngày đã làm thêm</Label>
                                        <Col md={8}>
                                            <Control.text model=".overTime" id="overTime" name="overTime"
                                                //defaultValue="0"
                                                className="form-control"
                                                validators={{
                                                    required,  isNumber
                                                }}
                                                />
                                            <Errors
                                                className="text-danger"
                                                model=".overTime"
                                                show="touched"
                                                messages={{
                                                    required: 'Yêu  cầu  nhập',
                                                    isNumber: 'Phải  là  một  số'
                                                }}
                                            />
                                        </Col>                        
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                                Thêm
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </div>
                        </ModalBody>

                    </Modal>

                </div>
                
            </div>
            );
        }
    }

export default StaffList;