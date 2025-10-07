import { FaEdit, FaUserTie, FaPlus } from "react-icons/fa";
import DataTable from "../../components/common/DataTable";

export default function Trainers() {
  const trainers = [
    { id: "#T001", name: "Alice Johnson", specialty: "Strength Training" },
    { id: "#T002", name: "Bob Smith", specialty: "Yoga"},
    { id: "#T003", name: "Charlie Lee", specialty: "Cardio" },
  ];

  const columns = [
    { key: "id", label: "Trainer ID" },
    { key: "name", label: "Name" },
    { key: "specialty", label: "Specialty" },
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
          <FaUserTie className="text-purple-600" /> Trainers
        </h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
          <FaPlus className="text-base" /> Add Trainer
        </button>
      </div>

      <DataTable columns={columns} data={trainers} actions={actions} />
    </section>
  );
}
