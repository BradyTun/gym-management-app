import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
// Import Font Awesome styles (if not already imported globally)
import { FaChartLine } from "react-icons/fa";

export default function ProgressChart() {
    const chartRef = useRef(null);
    let chartInstance = useRef(null);

    function getMockProgressData(start, end) {
        const labels = [];
        const data = [];
        let current = new Date(start);
        const last = new Date(end);
        while (current <= last) {
            labels.push(current.toISOString().slice(0, 10));
            data.push(Math.floor(Math.random() * 2));
            current.setDate(current.getDate() + 1);
        }
        return { labels, data };
    }

    const renderChart = (start, end) => {
        const { labels, data } = getMockProgressData(start, end);
        if (chartInstance.current) chartInstance.current.destroy();
        chartInstance.current = new Chart(chartRef.current, {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Attendance",
                        data,
                        backgroundColor: "rgba(37, 99, 235, 0.7)",
                        borderRadius: 6,
                    },
                ],
            },
            options: {
                scales: {
                    x: { grid: { display: false } },
                    y: { beginAtZero: true, max: 1, ticks: { stepSize: 1 } },
                },
                plugins: { legend: { display: false } },
            },
        });
    };

    useEffect(() => {
        renderChart("2024-06-01", "2024-06-15");
    }, []);

    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaChartLine className="text-purple-600" />
                    Progress Over Time
                </h2>
                <div>
                    <input
                        type="date"
                        className="px-3 py-2 border rounded-lg mr-2"
                        defaultValue="2024-06-01"
                    />
                    <input
                        type="date"
                        className="px-3 py-2 border rounded-lg"
                        defaultValue="2024-06-15"
                    />
                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg ml-2">
                        Select All
                    </button>
                </div>
            </div>
            <canvas ref={chartRef} height="80"></canvas>
        </section>
    );
}
