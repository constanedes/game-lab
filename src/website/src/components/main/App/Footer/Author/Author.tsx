import useFetch from '../../../../../hooks/useFetch';
import './Author.css';

interface IAuthorProps {
    githubProfileId: number;
}

export default function Author({ githubProfileId }: IAuthorProps) {
    const { data, loading, status } = useFetch(`https://api.github.com/user/${githubProfileId}`);

    return (
        <>
            {loading && <p>Loading...</p>}
            {status === 200 && (
                <div className="author">
                    <img src={data.avatar_url} alt={data.name} />
                    <a href={data.html_url} target="_blank" rel="noreferrer">
                        {data.name}
                    </a>
                </div>
            )}
        </>
    );
}
