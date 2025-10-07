import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function MemberModal({ onClose, onSave, member = null, packages = [] }) {
  const [form, setForm] = useState({
    name: "",
    package: "",
    startDate: "",
  });

  useEffect(() => {
    if (member) {
      setForm({
        name: member.name || "",
        package: member.package || "",
        startDate: member.startDate || "",
      });
    }
  }, [member]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (!form.name || !form.package || !form.startDate) {
      alert("Please fill all fields.");
      return;
    }
    onSave(form);
    onClose();
  };

  return (
    <div
      className="fixed text-slate-800 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaUser /> {member ? "Edit Member" : "Add Member"}
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Package</label>
            <select
              value={form.package}
              onChange={(e) => handleChange("package", e.target.value)}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Package</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name}
                </option>
              ))}
            </select>
          </div>

          <input
            type="date"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
          />
        </form>

        <div className="mt-6 flex justify-end gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" onClick={handleSave}>{member ? "Update" : "Save"}</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
