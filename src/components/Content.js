const Content = ({ info }) => {
    return (
        <section>
            <ul>
                {
                    info.map((item) => (<li key={item.id}>{JSON.stringify(item)}</li>))
                }
            </ul>
        </section>
    );
};

export default Content;