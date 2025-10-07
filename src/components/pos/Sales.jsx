import { FaReceipt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sales() {
  const sales = [
    { id: 1, item: "Protein Shake", qty: 2, total: 7.0, date: "2025-09-09" },
    { id: 2, item: "Day Pass", qty: 1, total: 10.0, date: "2025-09-08" },
    { id: 3, item: "Gym Towel", qty: 3, total: 21.0, date: "2025-09-07" },
  ];

  return (
    <section className="bg-slate-800 rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
          <FaReceipt className="text-purple-600" />
          Recent Sales
        </h2>
        <Link
          to="/sales"
          className="text-purple-600 font-semibold flex items-center gap-2 hover:underline"
        >
          View Sales Stats <FaArrowRight />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-500">
              <th className="py-3 px-4 font-semibold">Date</th>
              <th className="py-3 px-4 font-semibold">Item</th>
              <th className="py-3 px-4 font-semibold">Qty</th>
              <th className="py-3 px-4 font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr
                key={sale.id}
                className="border-b hover:bg-gray-700 transition"
              >
                <td className="py-3 px-4 text-gray-500">{sale.date}</td>
                <td className="py-3 px-4 font-medium text-gray-100">
                  {sale.item}
                </td>
                <td className="py-3 px-4 text-gray-500">{sale.qty}</td>
                <td className="py-3 px-4 text-gray-100 font-semibold">
                  ${sale.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
