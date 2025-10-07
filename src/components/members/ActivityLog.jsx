import { FaHistory } from "react-icons/fa";

export default function ActivityLog() {
    const activities = [
        { date: "2024-06-10", activity: "Personal Training", trainer: "Jane Smith", notes: "Upper body focus" },
        { date: "2024-06-08", activity: "Yoga Class", trainer: "Mike Johnson", notes: "Flexibility improvement" },
        { date: "2024-06-05", activity: "Cardio Session", trainer: "Jane Smith", notes: "Endurance training" },
    ];

    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <FaHistory className="text-yellow-600" />
                Recent Activity Log
            </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Activity</th>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Trainer</th>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {activities.map((a, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{a.date}</td>
                                <td className="px-4 py-2">{a.activity}</td>
                                <td className="px-4 py-2">{a.trainer}</td>
                                <td className="px-4 py-2">{a.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
