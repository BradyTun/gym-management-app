import { useState } from "react";
import { FaChartLine, FaFilter, FaDollarSign, FaShoppingBag } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function SalesReport() {
  const salesData = [
    { date: "2025-09-01", revenue: 120, sales: 8 },
    { date: "2025-09-02", revenue: 180, sales: 12 },
    { date: "2025-09-03", revenue: 90, sales: 6 },
    { date: "2025-09-04", revenue: 220, sales: 15 },
    { date: "2025-09-05", revenue: 300, sales: 18 },
    { date: "2025-09-06", revenue: 150, sales: 10 },
    { date: "2025-09-07", revenue: 270, sales: 14 },
  ];

  const productBreakdown = [
    { name: "Protein Shake", revenue: 400 },
    { name: "Day Pass", revenue: 600 },
    { name: "Personal Training", revenue: 1200 },
    { name: "Gym Towel", revenue: 250 },
  ];

  const [timeframe, setTimeframe] = useState("7d");

  return (
    <section className="max-w-6xl mx-auto py-6 px-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold flex items-center gap-2 text-white">
          <FaChartLine className="text-blue-600" />
          Sales & Revenue Report
        </h1>
        <div className="flex items-center gap-2 text-sm">
          <FaFilter className="text-gray-400" />
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-2 py-1 border rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="ytd">Last Year</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
          <FaDollarSign className="text-green-600 text-xl" />
          <div>
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <p className="text-lg text-slate-800 font-bold">${salesData.reduce((a, b) => a + b.revenue, 0)}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
          <FaShoppingBag className="text-blue-600 text-xl" />
          <div>
            <h3 className="text-gray-500 text-sm">Total Sales</h3>
            <p className="text-lg text-slate-800 font-bold">{salesData.reduce((a, b) => a + b.sales, 0)}</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex items-center gap-3">
          <FaChartLine className="text-purple-600 text-xl" />
          <div>
            <h3 className="text-gray-500 text-sm">Avg Revenue / Sale</h3>
            <p className="text-lg font-bold text-slate-800">
              ${(salesData.reduce((a, b) => a + b.revenue, 0) /
                salesData.reduce((a, b) => a + b.sales, 0)).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Revenue Trend */}
      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Product Breakdown */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Revenue by Product</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={productBreakdown}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="revenue" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
