import React, { Component } from 'react'

import {Navbar, Nav, NavItem, NavbarBrand, Container} from 'reactstrap'
import { Link , NavLink } from 'react-router-dom';

export const Heading = () => {
     
        return (
            <Navbar color="dark" dark>
              <Container>
                <NavbarBrand href="/">My Team</NavbarBrand>
                <Nav>
                  <NavItem>
                    <Link className="btn btn-primary" to="/add">Add User</Link>
                  </NavItem>
                </Nav>
        
              </Container>
              <Nav>
              <div className="header">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
              </Nav>
            </Navbar>
        );
    
}
 
export default Heading;