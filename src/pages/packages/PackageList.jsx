import { FaEdit, FaDollarSign, FaPlus } from "react-icons/fa";
import DataTable from "../../components/common/DataTable";

export default function Packages() {
  const packages = [
    { id: "#P001", name: "Monthly Pass", price: 50, duration: "1 Months",},
    { id: "#P002", name: "Quarterly Pass", price: 140, duration: "3 Months",},
    { id: "#P003", name: "Yearly Pass", price: 500, duration: "12 Months",},
  ];

  const columns = [
    { key: "id", label: "Package ID" },
    { key: "name", label: "Name" },
    { key: "price", label: "Price", render: (val) => `$${val}` },
    { key: "duration", label: "Duration" },
  ];

  const actions = [
    {
      label: "Edit",
      icon: <FaEdit className="text-base" />,
      onClick: (row) => alert(`Edit ${row.name}`),
      className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FaDollarSign className="text-green-600" /> Packages
        </h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
          <FaPlus className="text-base" /> Add Package
        </button>
      </div>

      <DataTable columns={columns} data={packages} actions={actions} />
    </section>
  );
}
