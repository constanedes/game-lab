

interface User {
    id: number;
    username: string;
}

export const User = ({ id, username }: User) => {
    return (
        <div>
            <div className="card-profile">
                <div className="user-name">{username}</div>
                <div className="buttons-admin">
                    <div className="btn-delete">
                        <i className="bi bi-trash-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
