import { useEffect, useState } from 'react';
import Game from './Game';
import gameslist from '../../../../../helpers/gamesList.js';
import useFetch from './../../../../../hooks/useFetch';
import './games.css';

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/games`)
            .then(response => response.json())
            .then(json => setGames(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className="album py-5 main-container-games">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <>
                            {games.map((e: any | undefined, key: any | undefined) => {
                                return (
                                    <div key={key}>
                                        <Game gameName={e.name} gameImg={e.image} gameId={e.id} />
                                    </div>
                                );
                            })}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
}
