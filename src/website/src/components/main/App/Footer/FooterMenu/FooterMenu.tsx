import { Link } from 'react-router-dom';

export default function FooterMenu() {
    return (
        <div className="menu-footer">
            <Link to="/">Back to home</Link>
            <Link to={'/account'}>My account</Link>
            <Link to={'/top'}>Scoreboard</Link>
        </div>
    );
}
