/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Game } from './Game';

import './ListGames.css';

export const ListGames = () => {
    const [game, setGame] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/games`)
            .then(response => response.json())
            .then(json => setGame(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="leaderboard">
            <div className="top-header">Admin games</div>
            <div className="list-games">
                {game.map((e: any | undefined, key: any | undefined) => {
                    return (
                        <div key={key}>
                            <Game id={e.id} game={e.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
