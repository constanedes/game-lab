import { Form, Modal, Button, Alert } from 'react-bootstrap';
import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react';

interface RegisterProps {
    toggleModal: () => void;
}

export default function Register({ toggleModal }: RegisterProps): ReactElement {
    type Register = {
        username: string;
        password: string;
        email: string;
    };

    const [register, setRegister] = useState<Register>({
        username: '',
        password: '',
        email: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegister({
            ...register,
            [name]: value,
        });
    };
    type EmailConf = string;
    type PassConf = string;
    const [isRegistered, setIsRegistered] = useState(false);
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [pass2Error, setPass2Error] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);
    const [emailConfirmation, setEmailConfirmation] = useState<EmailConf>();
    const [passwordConfirmation, setPasswordConfirmation] = useState<PassConf>();

    const handleChangePasswordConfirmation = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleChangeEmailConfirmation = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailConfirmation(e.target.value);
    };
    //ONCLICK
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUserError(!register.username);
        setPassError(!register.password);
        setPass2Error(!(passwordConfirmation === register.password));
        setEmailError(!register.email);
        setEmail2Error(!(emailConfirmation === register.email));

        if (!userError && !passError && !pass2Error && !emailError && !email2Error) {
            const request = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(register),
            };
            fetch(`http://localhost:8000/signup`, request)
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (res) {
                    console.log(res);
                });

            setIsRegistered(!isRegistered);
        }
    };
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isRegistered ? (
                    <span>You are registered! please login</span>
                ) : (
                    <Form id="formRegister">
                        <Form.Group className="mb-3" controlId="formBasicUser">
                            <Form.Label>User</Form.Label>
                            <Form.Control
                                value={register?.username}
                                onChange={handleChange}
                                type="username"
                                placeholder="Enter user"
                                name="username"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                            {userError && (
                                <Alert key={'danger'} variant={'danger'}>
                                    ¡You must enter an user!
                                </Alert>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={register?.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                            {passError && (
                                <Alert key={'danger'} variant={'danger'}>
                                    ¡You must enter a password!
                                </Alert>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                // value={passwordConfirmation}
                                onChange={handleChangePasswordConfirmation}
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                            {pass2Error && (
                                <Alert key={'danger'} variant={'danger'}>
                                    ¡Passwords are not the same!
                                </Alert>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={register?.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Enter email"
                                name="email"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                            {emailError && (
                                <Alert key={'danger'} variant={'danger'}>
                                    ¡You must enter an email!
                                </Alert>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
                            <Form.Label>Confirm Email</Form.Label>
                            <Form.Control
                                value={emailConfirmation}
                                onChange={handleChangeEmailConfirmation}
                                type="confirmEmail"
                                placeholder="Confirm Email"
                                name="confirmEmail"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                            {email2Error && (
                                <Alert key={'danger'} variant={'danger'}>
                                    ¡Emails are not the same!
                                </Alert>
                            )}
                        </Form.Group>

                        <Button type="submit" className='w-100' onClick={handleSubmit}>
                            Registrarse
                        </Button>
                    </Form>
                )}
            </Modal.Body>
            <Modal.Footer>
                
                <Button variant="primary" type="submit" onClick={toggleModal}>
                    Go to Login
                </Button>
            </Modal.Footer>
        </>
    );
}
