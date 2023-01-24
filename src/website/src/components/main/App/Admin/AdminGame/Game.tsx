

interface Game {
    id: number;
    game: string;
}

export const Game = ({ id, game }: Game) => {
    return (
        <div>
            <div className="card-profile">
                <div className="game-name">{game}</div>
                <div className="buttons-admin">
                    <div className="btn-delete">
                        <i className="bi bi-trash-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
