import { Form, Modal, Button } from 'react-bootstrap';
import { ReactElement } from 'react';
import './modal.css'

interface LoginProps {
    toggleModal: () => void;
}

export default function Login({ toggleModal }: LoginProps): ReactElement {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className='cuerpo-modal'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="user" placeholder="Enter user" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className='w-50' onClick={toggleModal}>
                    Register
                </Button>
                <Button variant="primary" className='w-50' type="submit">
                    Login
                </Button>
            </Modal.Footer>
        </>
    );
}
