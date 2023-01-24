/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Form, Button, Modal, Nav } from 'react-bootstrap';
import Register from './formRegister';
import Login from './formLogin';
import '../header.css';

export default function ModalLogin(): JSX.Element {
    const [show, setShow] = useState(false);
    const [register, setRegister] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleModal = () => setRegister(!register);

    return (
        <>
            <Nav.Link className="btn btn-primary btn-header" onClick={handleShow}>
                <i className="bi bi-person"></i>
            </Nav.Link>

            <Modal show={show} onHide={handleClose}>
                {register ? (
                    <Register toggleModal={toggleModal} />
                ) : (
                    <Login toggleModal={toggleModal} />
                )}
            </Modal>
        </>
    );
}
