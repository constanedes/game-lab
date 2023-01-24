/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface IGame {
    id?: number;
    name?: string;
    description?: string;
    image?: string;
}

export default function ViewGame() {
    function handleButtonClick() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Function not implement',
        });
    }

    const { id } = useParams();

    const [game, setGame] = useState<IGame | undefined>();

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/games`)
            .then(response => response.json())
            .then(json => filter(json))
            .catch(error => console.log(error));
    }, [id]);

    function filter(gamelist: any | undefined) {
        setGame(gamelist.find((game: IGame) => game.id === Number(id)));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Figure>
                <div style={{ alignItems: 'center' }}>
                    <Figure.Caption>
                        <h2>{game?.name}</h2>
                    </Figure.Caption>
                    <div
                        style={{
                            marginTop: 0,
                            marginRight: 'auto',
                            marginBottom: 0,
                            marginLeft: 'auto',
                        }}
                    >
                        <Figure.Image src={game?.image} alt={game?.name} />
                        {/* <img src={game?.image} /> */}
                    </div>
                    <button onClick={handleButtonClick}>PLAY!</button>
                    <Figure.Caption>{game?.description}</Figure.Caption>
                </div>
            </Figure>
        </div>
    );
}
