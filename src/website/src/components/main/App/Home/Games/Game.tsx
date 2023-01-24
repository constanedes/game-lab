import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';

interface IGameProps {
    gameId?: number;
    gameName: string;
    gameImg: string;
}

function Game({ gameName, gameImg, gameId }: IGameProps) {
    return (
        <div className="d-flex justify-content-center">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={gameImg} />
                <Card.Body>
                    <Card.Title>{gameName}</Card.Title>
                    <Link to={`/viewGame/${gameId}`}>
                        <Button variant="primary" className="w-100">
                            JUGAR
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Game;

//usar para divir los juegos recomendados con los demás un hr o diferente backgrounnd
//estirar el carrusel y poner el texto abajo
// agregar el acerca de nosotros
