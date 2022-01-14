import React, { Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='asset/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/trangchu'><span className="fa fa-home fa-lg"></span> Trang Chủ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/nhanvien'><span className="fa fa-users fa-lg"></span> Nhân Viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/phongban'><span className="fa fa-vcard-o fa-lg"></span> Phòng Ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/bangluong'><span className="fa fa-money fa-lg"></span> Bảng Lương</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
       
            </React.Fragment>
        );
    }
}
export default Header;