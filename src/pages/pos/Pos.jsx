import Cart from "../../components/pos/Cart";
import ProductList from "../../components/pos/ProductList";
import Sales from "../../components/pos/Sales";

export default function Pos() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <ProductList />
        <Cart />
      </div>
      <Sales />
    </>
  );
}
