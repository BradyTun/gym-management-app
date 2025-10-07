import { useState } from "react";

export default function MemberEdit({ member = {}, onSave }) {
  const [form, setForm] = useState({
    name: member.name || "",
    fatherName: member.fatherName || "",
    address: member.address || "",
    phone: member.phone || "",
    nrc: member.nrc || "",
    gender: member.gender || "",
    birthdate: member.birthdate || "",
    marriageStatus: member.marriageStatus || "",
    organization: member.organization || "",
    orgMemberId: member.orgMemberId || "",
    height: member.height || "",
    weight: member.weight || "",
    otherSports: member.otherSports || "",
    healthConditions: member.healthConditions || "",
    surgeryExperience: member.surgeryExperience || "",
    doctorInstructions: member.doctorInstructions || "",
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  const inputClass =
    "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="max-w-4xl text-slate-800 mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Member</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Basic Info */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Father's Name</label>
          <input
            type="text"
            value={form.fatherName}
            onChange={(e) => handleChange("fatherName", e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">NRC</label>
          <input
            type="text"
            value={form.nrc}
            onChange={(e) => handleChange("nrc", e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Gender</label>
          <select
            value={form.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className={inputClass}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Birthdate</label>
          <input
            type="date"
            value={form.birthdate}
            onChange={(e) => handleChange("birthdate", e.target.value)}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Marriage Status</label>
          <select
            value={form.marriageStatus}
            onChange={(e) => handleChange("marriageStatus", e.target.value)}
            className={inputClass}
            required
          >
            <option value="">Marriage Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>

        {/* Optional Organization Fields */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Organization (optional)</label>
          <input
            type="text"
            value={form.organization}
            onChange={(e) => handleChange("organization", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Organization Member ID (optional)</label>
          <input
            type="text"
            value={form.orgMemberId}
            onChange={(e) => handleChange("orgMemberId", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Physical Stats */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={form.height}
            onChange={(e) => handleChange("height", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={form.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Optional Health/Sports Fields */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Other Sport Activities (optional)</label>
          <input
            type="text"
            value={form.otherSports}
            onChange={(e) => handleChange("otherSports", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Health Conditions (optional)</label>
          <input
            type="text"
            value={form.healthConditions}
            onChange={(e) => handleChange("healthConditions", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Surgery Experience (optional)</label>
          <input
            type="text"
            value={form.surgeryExperience}
            onChange={(e) => handleChange("surgeryExperience", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Doctor's Instructions (optional)</label>
          <input
            type="text"
            value={form.doctorInstructions}
            onChange={(e) => handleChange("doctorInstructions", e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
