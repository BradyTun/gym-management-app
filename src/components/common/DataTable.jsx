import { useState, useMemo } from "react";

export default function DataTable({ columns, data, actions }) {
  const [search, setSearch] = useState("");

  // Filtered data based on search
  const filteredData = useMemo(() => {
    if (!search) return data;
    const lowerSearch = search.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const value = col.render ? col.render(row[col.key], row) : row[col.key];
        if (value === undefined || value === null) return false;
        return String(value).toLowerCase().includes(lowerSearch);
      })
    );
  }, [search, data, columns]);

  return (
    <div className="bg-slate-800 text-slate-800 max-h-screen overflow-y-auto rounded-2xl shadow-lg p-6 mb-8">
      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase"
                >
                  {col.label}
                </th>
              ))}
              {actions && (
                <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 text-sm">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                {actions && (
                  <td className="px-4 py-2 flex gap-2">
                    {actions.map((action, j) => (
                      <button
                        key={j}
                        onClick={() => action.onClick(row)}
                        className={`${action.className} text-sm flex items-center gap-1`}
                      >
                        {action.icon} {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
