import {OptionButtons} from "./OptionButtons";
import {CreateButton} from "./CreateButton";

export const TableComponent = ({title, headers, data}) => {
    return(
        <div className="w-full h-max mt-5 p-3 text-white">
            <h2 className="font-bold w-full text-left text-3xl"> {title } <CreateButton /> </h2>
            <table className=" mt-5 rounded-2xl min-w-11/12">
                <thead className="rounded-md">
                    <tr className=" bg-neutral-900">
                        {headers.map((header, index) => (
                            <th key={index} className="text-left px-5 py-4"> {header} </th>
                        ))}
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody className="bg-neutral-800">
                    {data.map((item, index) => (
                        <tr key={index} className="">
                            <td className="border-b border-t border-neutral-700  p-5"> {item.name} </td>
                            <td className="border-b border-t border-neutral-700  p-5">{ item.role ? item.role : item.word}</td>
                            <td className="border-b border-t border-neutral-700 text-center">
                                <OptionButtons />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;