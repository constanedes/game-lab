import { ListGames } from './AdminGame/ListGames';
import { ListUsers } from './AdminUsers/ListUsers';

export default function admin() {
    return (
        <div>
            <ListUsers />
            <ListGames />
        </div>
    );
}
