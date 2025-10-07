import { FaIdCard, FaRedo, FaCheck } from "react-icons/fa";

export default function MembershipDetails({ onRenew }) {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <FaIdCard className="text-green-600" />
                Membership Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="font-semibold text-gray-700 mb-1">Assigned Trainers</div>
                    <ul className="mb-4">
                        <li className="text-gray-900">Jane Smith</li>
                        <li className="text-gray-900">Mike Johnson</li>
                    </ul>
                    <div className="font-semibold text-gray-700 mb-1">Assigned Package</div>
                    <div className="text-gray-900 mb-4">
                        Premium (Access to all facilities, 12 PT sessions/month)
                    </div>
                    <div className="font-semibold text-gray-700 mb-1">Exercises</div>
                    <ul>
                        <li className="text-gray-900">Cardio (Treadmill, Cycling)</li>
                        <li className="text-gray-900">Strength (Squats, Bench Press)</li>
                        <li className="text-gray-900">Flexibility (Yoga, Stretching)</li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold text-gray-700 mb-1">
                        Next Payment / Renewal Date
                    </div>
                    <div className="text-orange-500 font-bold text-lg mb-2">2024-07-15</div>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4 flex items-center"
                        onClick={onRenew}
                    >
                        <FaRedo className="align-middle mr-1" /> Renew Membership
                    </button>
                    <div className="font-semibold text-gray-700 mb-1">Payment Status</div>
                    <div className="text-green-600 font-semibold mb-4 flex items-center gap-1">
                        Paid <FaCheck />
                    </div>
                    <div className="font-semibold text-gray-700 mb-1">
                        Attendance (This Month)
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-full">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                        </div>
                        <span className="text-gray-700 font-semibold">12 / 20 days</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
