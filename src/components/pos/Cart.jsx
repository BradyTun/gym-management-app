import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const cartItems = [
    { name: "Protein Shake", qty: 2, total: 7.0 },
    { name: "Day Pass", qty: 1, total: 10.0 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.total, 0);

  return (
    <section className="bg-slate-800 rounded-2xl shadow-lg p-6 col-span-4 md:col-span-2 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
        <FaShoppingCart className="text-green-600" />
        Cart
      </h2>

      <ul className="divide-y mb-6">
        {cartItems.map((item, i) => (
          <li key={i} className="flex items-center justify-between py-3">
            <div>
              <span className="font-semibold text-gray-100">
                {item.name} x{item.qty}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-100">${item.total.toFixed(2)}</span>
              <button
                className="text-red-500 hover:text-red-700 font-medium transition"
                onClick={() => console.log("Remove item", item.name)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between font-bold text-xl mb-6">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
          Checkout
        </button>
        <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition">
          Clear Cart
        </button>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-white mb-2">Customer Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 ">
          <input
            type="text"
            placeholder="Member ID (optional)"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Customer Name"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
