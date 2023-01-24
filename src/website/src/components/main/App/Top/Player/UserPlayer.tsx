import './UserPlayer.css';

interface User {
    username: string;
    points: number;
    image: string;
}

export const Player = ({ username, points, image }: User) => {
    return (
        <div>
            <div className="card-profile">
                <div className="user-rank">#1</div>
                <img className="profile-picture" src={image} alt="First slide" />
                <div className="user-name">{username}</div>
                <div className="user-points">{points}</div>
            </div>
        </div>
    );
};
