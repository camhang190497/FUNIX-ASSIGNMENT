import React, { Component } from 'react';
import { CardTitle, CardText, Row, Col, CardImg, CardBody, BreadcrumbItem, Breadcrumb, Form, Label, Input,  Button } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';


    function RenderStaff({staff, department}) {
        return(
            <Row className="row no-gutters">
                <Col className="col-6 col-sm-4 col-md-3">
                    <CardImg width="auto" src={staff.image} alt={staff.name}></CardImg>
                </Col>
                <Col className="col-12 col-sm-8 col-md-9">
                    <CardBody style={{paddingTop:'0px'}}>
                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {department.name }</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Col>
            </Row>
        );
    }
    class UpdateForm extends Component {
        constructor(props){
            super(props);
            this.state = {
                staff: props.staff
            };
        }
        handleSubmit(e) {
            e.preventDefault();
            const staffUpdate ={
                id: this.state.staff.id,
                name: this.state.staff.name,
                doB: this.state.staff.doB,
                startDate: this.state.staff.startDate,
                salaryScale: this.state.staff.salaryScale,
                departmentId: this.state.staff.departmentId,
                annualLeave: this.state.staff.annualLeave,
                overTime: this.state.staff.overTime
            };
            this.props.updateStaff(staffUpdate);
        }
        render(){
            return(
                <div>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row>
                            <Col md={4}>
                                <Label htmlFor="name">Name</Label>
                            </Col>
                            <Col md={8}>
                                <Input className='form-control' name="name"
                                       value={this.state.staff.name}
                                       onChange={(e) => this.setState({
                                           staff: { ...this.state.staff, name: e.target.value }
                                       })} />
                                <Input type="hidden" name="id" value={this.state.staff.id} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Label htmlFor="doB">ngay sinh:</Label>
                            </Col>
                            <Col md={8}>
                                <Input className='form-control' name="doB"
                                       value={this.state.staff.doB}
                                       onChange={(e) => this.setState({
                                           staff: { ...this.state.staff, doB: e.target.value }
                                       })} />
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Label htmlFor="startDate">ngay vao cong ty:</Label>
                            </Col>
                            <Col md={8}>
                                <Input className='form-control' name="startDate"
                                       value={this.state.staff.startDate}
                                       onChange={(e) => this.setState({
                                           staff: { ...this.state.staff, startDate: e.target.value }
                                       })} />
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Label htmlFor="salaryScale">he so luong:</Label>
                            </Col>
                            <Col md={8}>
                                <Input className='form-control' name="salaryScale"
                                       value={this.state.staff.salaryScale}
                                       onChange={(e) => this.setState({
                                           staff: { ...this.state.staff, salaryScale: e.target.value }
                                       })} />
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Label htmlFor="departmentId">phong ban:</Label>
                            </Col>
                            <Col md={8}>
                                <select className='form-control' name="departmentId"
                                       value={this.state.staff.departmentId}
                                       onChange={(e) => this.setState({
                                           staff: { ...this.state.staff, departmentId: e.target.value }
                                       })} >
                                       <option value="Sale" >Sale</option>
                                                    <option value="HR" >HR</option>
                                                    <option value="Marketing" >Marketing</option>
                                                    <option value="IT" >IT</option>
                                                    <option value="Finance" >Finance</option>
                                </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Label htmlFor="annualLeave">so ngay nghi con lai:</Label>
                            </Col>
                            <Col md={8}>
                                <Input className='form-control' name="annualLeave"
                                       value={this.state.staff.annualLeave}
                                       onChange={(e) => this.setState({
                                           staff: { ...this.state.staff, annualLeave: e.target.value }
                                       })} />
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Label htmlFor="overTime">so ngay da lam them:</Label>
                            </Col>
                            <Col md={8}>
                                <Input className='form-control' name="overTime"
                                       value={this.state.staff.overTime}
                                       onChange={(e) => this.setState({
                                           staff: { ...this.state.staff, overTime: e.target.value }
                                       })} />
                                
                            </Col>
                        </Row>
                        <Button color="success" type="submit">Update</Button>
                    </Form>
                </div>
            )
        }
    }
    

    
    class StaffDetail extends Component {
        constructor(props){
            super(props);
            this.state = {
                select: true,
            }
         
        }
        render(){
            if (this.props.staff != null)
            return(
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/nhanvien'>Nhân  viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.staff.name}</h3>
                        <Button color="success" onClick={()=> this.setState({ select: !this.state.select })}>Update</Button>
                        <hr/>
                    </div>
                
                    <div className="col-12">
                        <RenderStaff staff={this.props.staff}
                        department={this.props.department}
                         />
                    </div>
                    <div>
                        <UpdateForm staff={this.props.staff}
                                  updateStaff={this.props.updateStaff}/>
                    </div>
                </div>
            </div>
        );
        else 
        return(
            <div></div>
        ) 
            
        }
    }

    



export default StaffDetail;