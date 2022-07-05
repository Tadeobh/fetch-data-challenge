import Table from "./Table";

const Content = ({ fetchError, info }) => {
    return (
        <section>
            {!fetchError ? 

                <Table 
                    info={info}
                />
                :
                <p>{fetchError}</p>
            }
        </section>
    );
};

export default Content;