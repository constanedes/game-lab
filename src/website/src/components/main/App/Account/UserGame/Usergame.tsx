

interface Game {
    name: string;
    count: number;
}

export const UserGame = ({ name, count }: Game) => {
    return (
        <div>
            <div className="card-profile">
                <div className="game-name">{name}</div>
                <div className="game_name">{count}</div>
            </div>
        </div>
    );
};
