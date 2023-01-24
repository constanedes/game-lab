/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';


import { UserGame } from './Usergame';

export const UserGames = () => {
    const [match, setMatch] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/users/2/games`)
            .then(response => response.json())
            .then(json => setMatch(json.matches))
            .catch(error => console.log(error));
    }, []);

    console.log(match);

    return (
        <div className="leaderboard">
            <div className="top-header">Games played</div>
            <div className="list-games">
                {match.map((e: any | undefined, key: any | undefined) => {
                    return (
                        <div key={key}>
                            <UserGame name={e.game.name} count={e.game._count.matches} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
