import TableRow from "./TableRow";

const Table = ({ info }) => {
    return (
        <table>
            <tbody>
                {
                    info.map((item) => (
                        <TableRow
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;