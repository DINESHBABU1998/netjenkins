import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

// export default function Appbar() {
//   return (
//     <div>Appbar</div>
//   )
// }
// export const Hero=()=>{
//     return <h1>Hero section</h1>
// }

export default function Appbar() {
  const value= true ;
  return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/" style={{color:'red'}}><h1>NETFLIX</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link><Link to='/' style={{textDecoration:'none',color:'gray'}}>Home</Link></Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            {
              value?<Link className="btn btn-danger" to='/login'>Login</Link>:<Link to='/' className="btn btn-warning">Logout</Link>
            }
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

