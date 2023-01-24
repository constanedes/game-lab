import { Button, Col, Container, Row } from 'react-bootstrap';
interface userData {
    username: string;
    email: string;
    profileImg: string;
}
export default function UserData({ username, email, profileImg }: userData) {
    return (
        <>
            <Container className="bg-light">
                <Row>
                    <Col xs={6}>
                        <label className="mb-3" htmlFor="username">
                            Nombre de usuario
                        </label>
                        <input type="text" value={username} />
                        <br />
                        <label className="mb-3" htmlFor="email">
                            Email
                        </label>
                        <input type="text" value={email} />
                        <br />
                        <Button variant="outline-secondary">Editar</Button>
                    </Col>
                    <Col xs={6}>
                        <p>Imagen</p>
                        <img src={profileImg} alt="Foto de perfil" height="100" width="auto" />
                        <Button variant="outline-secondary">Cargar Foto</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
