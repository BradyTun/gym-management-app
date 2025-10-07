import { FaUser, FaEdit } from "react-icons/fa";

export default function MemberInfo({ onEdit }) {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaUser className="text-blue-600" /> Member Information
                </h2>
                <button
                    className="bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-1"
                    onClick={onEdit}
                >
                    <FaEdit className="text-base" /> Edit
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="font-semibold text-gray-700 mb-1">Name</div>
                    <div className="text-gray-900 mb-4">John Doe</div>
                    <div className="font-semibold text-gray-700 mb-1">Contact</div>
                    <div className="text-gray-900 mb-4">
                        john.doe@email.com
                        <br />
                        +1 234 567 8901
                    </div>
                    <div className="font-semibold text-gray-700 mb-1">Join Date</div>
                    <div className="text-gray-900">2023-08-15</div>
                </div>
                <div>
                    <div className="font-semibold text-gray-700 mb-1">Member ID</div>
                    <div className="text-gray-900 mb-4">#10234</div>
                    <div className="font-semibold text-gray-700 mb-1">Health Notes</div>
                    <div className="text-gray-900 mb-4">
                        No injuries. Allergic to peanuts.
                    </div>
                    <div className="font-semibold text-gray-700 mb-1">Goals</div>
                    <div className="text-gray-900">Lose 5kg, Improve flexibility</div>
                </div>
            </div>
        </section>
    );
}
