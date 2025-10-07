import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./pages/Nav";
import Pos from "./pages/pos/Pos";
import SalesReport from "./pages/sales/Sales";
import Members from "./pages/Members/MemberList";
import MemberDetails from "./pages/Members/MemberView";
import MemberEdit from "./pages/Members/MemberEdit";
import Packages from "./pages/Packages/PackageList";
import Trainers from "./pages/Trainers/TrainerList";
import Products from "./pages/products/ProductList";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navigation */}
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/pos" element={<Pos />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<SalesReport />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/:id" element={<MemberDetails />} />
            <Route path="/members/:id/edit" element={<MemberEdit />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/instructors" element={<Trainers />} />

            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
