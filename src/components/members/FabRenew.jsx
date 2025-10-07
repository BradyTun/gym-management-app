import { FaSyncAlt } from "react-icons/fa";

export default function FabRenew({ onClick }) {
  return (
    <button
      className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center text-3xl z-50"
      onClick={onClick}
    >
      <FaSyncAlt />
    </button>
  );
}
