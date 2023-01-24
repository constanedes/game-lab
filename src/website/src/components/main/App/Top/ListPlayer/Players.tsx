/* eslint-disable @typescript-eslint/no-explicit-any */
import { Player } from '../Player/UserPlayer';
import './ListPlayers.css';
import { useState, useEffect } from 'react';

export const ListPlayers = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/users/ranking`)
            .then(response => response.json())
            .then(json => setUser(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="leaderboard">
            <div className="top-header">
                Leaderboard <i className="bi bi-trophy-fill"></i>
            </div>
            <div className="list-players">
                <>
                    {user.map((e: any | undefined, key: any | undefined) => {
                        return (
                            <div key={key}>
                                <Player username={e.username} points={e.points} image={e.image} />
                            </div>
                        );
                    })}
                </>
            </div>
        </div>
    );
};
