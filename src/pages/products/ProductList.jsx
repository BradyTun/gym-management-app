import { FaBox, FaPlus, FaUserTie } from "react-icons/fa";
import ProductList from "../../components/products/ProductList";

export default function Products() {

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FaBox className="text-purple-600" /> Products
        </h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
          <FaPlus className="text-base" /> Add Product
        </button>
      </div>

        <ProductList />
    </div>
  );
}

