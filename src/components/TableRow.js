const TableRow = ({ item }) => {
    return (
        <tr>
            {
                Object.keys(item).map((key, index) => (
                    <td key={key}>{JSON.stringify(item[key])}</td>
                ))
            }
        </tr>
    );
}

export default TableRow;