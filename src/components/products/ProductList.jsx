import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import DataTable from "../common/DataTable";

export default function ProductList() {
  const [showModal, setShowModal] = useState(false);

  const products = [
    { id: "P001", name: "Protein Powder", price: "50.00", stock: 20 },
    { id: "P002", name: "Yoga Mat", price: "25.00", stock: 15 },
    { id: "P003", name: "Dumbbell Set", price: "80.00", stock: 10 },
  ];

  // Define columns
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "price", label: "Price", render: (value) => `$${value}` },
    { key: "stock", label: "Stock" },
  ];

  // Define actions
  const actions = [
    {
      label: "Edit",
      icon: <FaEdit className="text-base" />,
      className: "bg-blue-500 text-white px-3 py-1 rounded",
      onClick: (row) => setShowModal(true),
    },
    {
      label: "Delete",
      icon: <FaTrash className="text-base" />,
      className: "bg-red-500 text-white px-3 py-1 rounded",
      onClick: (row) => console.log("Delete", row),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={products} actions={actions} />
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <p>Product edit modal content here...</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
