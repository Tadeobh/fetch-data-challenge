const Selector = ({ infoSelector, setInfoSelector }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <button
                style={infoSelector === 'users' ? {backgroundColor: 'black', color: 'white'} : null}
                type="submit"
                aria-label="users"
                onClick={() => infoSelector !== 'users' ? setInfoSelector('users'): null}
            >Users</button>
            <button
                style={infoSelector === 'posts' ? {backgroundColor: 'black', color: 'white'} : null}
                type="submit"
                aria-label="posts"
                onClick={() => infoSelector !== 'posts' ? setInfoSelector('posts'): null}
            >Posts</button>
            <button
                style={infoSelector === 'comments' ? {backgroundColor: 'black', color: 'white'} : null}
                type="submit"
                aria-label="comments"
                onClick={() => infoSelector !== 'comments' ? setInfoSelector('comments'): null}
            >comments</button>
        </form>
    );
};

export default Selector;