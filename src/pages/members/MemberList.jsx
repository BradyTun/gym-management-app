import { useState } from "react";
import { FaUser, FaUserPlus, FaEdit, FaEye, FaChartLine } from "react-icons/fa";
import DataTable from "../../components/common/DataTable";
import MemberModal from "../../components/members/MemberModal";
import { useNavigate } from "react-router-dom";

export default function Members() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const members = [
    { id: "10234", name: "John Doe", email: "john.doe@email.com", phone: "+1 234 567 8901", joinDate: "2023-08-15", status: "Active", result: "20 lbs lost", timeframe: "2 months" },
    { id: "10235", name: "Jane Smith", email: "jane.smith@email.com", phone: "+1 234 567 8902", joinDate: "2024-01-10", status: "Pending", result: "15 lbs lost", timeframe: "3 months" },
    { id: "10236", name: "Mike Johnson", email: "mike.j@email.com", phone: "+1 234 567 8903", joinDate: "2023-12-05", status: "Inactive", result: "10 lbs lost", timeframe: "1.5 months" },
  ];

  const topResults = members.sort((a,b)=>b.result.split(' ')[0]-a.result.split(' ')[0]).slice(0,3);

  const packages = [
    { id: 1, name: "Basic Package" },
    { id: 2, name: "Premium Package" },
    { id: 3, name: "Personal Training" },
  ];

  const columns = [
    { key: "id", label: "Member ID" },
    { key: "name", label: "Name" },
    { key: "contact", label: "Contact", render: (_, row) => (<>{row.email}<br />{row.phone}</>) },
    { key: "joinDate", label: "Join Date" },
    { key: "status", label: "Status", render: (_, row) => {
      const color = row.status === "Active" ? "text-green-600" : row.status === "Pending" ? "text-orange-500" : "text-red-500";
      return <span className={`font-semibold ${color}`}>{row.status}</span>;
    }},
  ];

  const actions = [
    { label: "View", icon: <FaEye className="text-base" />, onClick: (row) => navigate(`/members/${row.id}`), className: "bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition" },
    { label: "Edit", icon: <FaEdit className="text-base" />, onClick: (row) => navigate(`/members/${row.id}/edit`), className: "bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition" },
  ];

  const handleSaveMember = (newMember) => {
    console.log("New member saved:", newMember);
  };

  return (
    <section className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <FaUser className="text-blue-600" /> Members
        </h1>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <FaUserPlus className="text-base" /> Add Member
        </button>
      </div>

      {/* Members Data Table */}
      <DataTable columns={columns} data={members} actions={actions} />

      {/* Modal */}
      {showModal && (
        <MemberModal
          packages={packages}
          onClose={() => setShowModal(false)}
          onSave={handleSaveMember}
        />
      )}

            {/* Top Results Cards */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topResults.map((m) => (
          <div key={m.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">{m.name}</h3>
              <FaChartLine className="text-blue-500 text-xl" />
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-green-600">{m.result}</p>
              <p className="text-gray-500 text-sm mt-1">{m.timeframe}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
