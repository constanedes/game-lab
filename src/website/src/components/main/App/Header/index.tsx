import { ReactElement } from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Modal';
import './header.css';

interface IHeaderProps {
    name: string;
    profileImg: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Header({ name, profileImg }: IHeaderProps): ReactElement {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Link to="/">
                        <img
                            className="App-logo"
                            height="62"
                            src="/assets/images/logo-game-lab.png"
                            alt="logoGameLab"
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav className="my-2 my-lg-0" style={{ maxHeight: '40px' }} navbarScroll>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button className="btn btn-primary btn-header">
                                    <i className="bi bi-search"></i>
                                </Button>
                            </Form>
                            <Link to="/top" className="btn btn-primary btn-header">
                                <i className="bi bi-trophy"></i>
                            </Link>

                            <Login />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="nav-back"></div>
        </div>
    );
}
