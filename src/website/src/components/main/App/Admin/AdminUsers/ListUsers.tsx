/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { User } from './User';
import './ListUsers.css';

export const ListUsers = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/users`)
            .then(response => response.json())
            .then(json => setUser(json))
            .catch(error => console.log(error));
        console.log(user);
    }, []);

    return (
        <div className="leaderboard">
            <div className="top-header">Admin users</div>
            <div className="list-users">
                {user.map((e: any | undefined, key: any | undefined) => {
                    return (
                        <div key={key}>
                            <User id={e.id} username={e.username} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
