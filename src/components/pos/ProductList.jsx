// Import Font Awesome icons
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProductList({ showModal, setShowModal }) {
    const products = [
        { id: "P001", name: "Protein Powder", price: "50.00", stock: 20 },
        { id: "P002", name: "Yoga Mat", price: "25.00", stock: 15 },
        { id: "P003", name: "Dumbbell Set", price: "80.00", stock: 10 },
    ];

    return (
        <div className="overflow-x-auto col-span-4 md:col-span-2 bg-slate-800 rounded-2xl shadow-lg p-6">
            <table className="min-w-full bg-slate-800 divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            ID
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Name
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Price
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Stock
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-slate-800 divide-y divide-gray-200">
                    {products.map((p) => (
                        <tr key={p.id} className="hover:bg-gray-500">
                            <td className="px-4 py-2">{p.id}</td>
                            <td className="px-4 py-2">{p.name}</td>
                            <td className="px-4 py-2">${p.price}</td>
                            <td className="px-4 py-2">{p.stock}</td>
                            <td className="px-4 py-2 flex gap-2">
                                <button
                                    className="flex items-center px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                                    onClick={() => setShowModal(true)}
                                >
                                    <FaEdit className="text-base mr-1" /> Edit
                                </button>
                                <button
                                    className="flex items-center px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                >
                                    <FaTrash className="text-base mr-1" /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
