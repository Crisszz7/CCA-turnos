
export const TableComponent = ({title, headers, data}) => {
    return(
        <div className="w-full h-max flex flex-col items-center mt-5 p-3 text-white">
            <h2 className="font-bold w-full text-left text-2xl"> {title} </h2>
            <table className="border border-white lg:h-92 w-11/12 mt-3 rounded-2xl">
                <thead>
                    <tr className="border border-white bg-neutral-800">
                        {headers.map((header, index) => (
                            <th key={index} className="border border-white p-2"> {header} </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-neutral-900">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="border border-white text-center p-2"> {item.name} </td>
                            <td className="border border-white text-center p-2">{ item.role ? item.role : item.word}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;