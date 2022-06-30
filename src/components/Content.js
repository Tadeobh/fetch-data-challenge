const Content = ({ fetchError, info }) => {
    return (
        <section>
            {!fetchError ? 
                <ul>
                    {
                        info.map((item) => (<li key={item.id}>{JSON.stringify(item)}</li>))
                    }
                </ul> :
                <p>{fetchError}</p>
            }
        </section>
    );
};

export default Content;