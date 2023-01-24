import React from 'react';
import Admin from '../Admin';
import UserData from './UserData';
import { UserGames } from './UserGame/UserGames';

export default function Account() {
    return (
        <div>
                <h2>Mi Cuenta</h2>
                <UserData
                username="frbianciotto"
                email="aaa"
                profileImg="./assets/image/default-profile.png"
            /> 
        <UserGames />
        </div>
    );
}
