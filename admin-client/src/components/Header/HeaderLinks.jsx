import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import {connect} from 'react-redux';
import {logout} from '../../actions/satishActions'

class HeaderLinks extends Component {
    handleLogout(){
        this.props.logout();
    }
    render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );

    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">
              <button className="btn" onClick={this.handleLogout.bind(this)}> Log out </button>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default connect(null,{logout}) (HeaderLinks);
