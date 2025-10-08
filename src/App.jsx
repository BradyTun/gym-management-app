import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./pages/Nav";
import Pos from "./pages/pos/Pos";
import SalesReport from "./pages/sales/Sales";
import Members from "./pages/members/MemberList";
import MemberDetails from "./pages/members/MemberView";
import MemberEdit from "./pages/members/MemberEdit";
import Packages from "./pages/packages/PackageList";
import Trainers from "./pages/trainers/TrainerList";
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
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />

            <Route path="/pos" element={<Navigate to="/login" />} />
            <Route path="/products" element={<Navigate to="/login" />} />
            <Route path="/sales" element={<Navigate to="/login" />} />
            <Route path="/members" element={<Navigate to="/login" />} />
            <Route path="/members/:id" element={<Navigate to="/login" />} />
            <Route path="/members/:id/edit" element={<Navigate to="/login" />} />
            <Route path="/packages" element={<Navigate to="/login" />} />
            <Route path="/instructors" element={<Navigate to="/login" />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
