import { FaSyncAlt, FaTimes } from "react-icons/fa";

export default function RenewalModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                    <FaSyncAlt className="text-orange-500" />
                    Renew Membership
                </h2>
                <p className="mb-6">
                    Are you sure you want to renew your membership for{" "}
                    <span className="text-orange-500 font-semibold">John Doe</span>?
                </p>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mr-2 flex items-center gap-2"
                    onClick={onConfirm}
                >
                    <FaSyncAlt />
                    Yes, Renew
                </button>
                <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
                    onClick={onClose}
                >
                    <FaTimes />
                    Cancel
                </button>
            </div>
        </div>
    );
}
