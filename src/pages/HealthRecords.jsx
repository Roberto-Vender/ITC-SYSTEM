import React, { useState, useMemo } from "react";

export default function HealthRecords() {
  // local UI-only sample data
  const initial = [
    { id: "0001", name: "Ana Dela Cruz", type: "General Check-up", date: "2025-10-13", staff: "Nurse Jelou", status: "Completed" },
    { id: "0002", name: "Maria Dela Cruz", type: "General Check-up", date: "2025-10-13", staff: "Nurse Jelou", status: "Completed" },
    { id: "0003", name: "Juan Santos", type: "Vaccination", date: "2025-10-10", staff: "Dr. Ramos", status: "Pending" },
    { id: "0004", name: "Anna Ramos", type: "Follow-up", date: "2025-10-01", staff: "Nurse Jelou", status: "Completed" },
    { id: "0005", name: "Daniel Cruz", type: "Consultation", date: "2025-09-28", staff: "Dr. Ramos", status: "Completed" },
  ];

  const [rows] = useState(initial);
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      if (q) {
        const lower = q.toLowerCase();
        if (!r.name.toLowerCase().includes(lower) && !r.id.includes(q) && !r.type.toLowerCase().includes(lower)) {
          return false;
        }
      }

      if (type && r.type !== type) return false;

      if (dateFrom && r.date < dateFrom) return false;
      if (dateTo && r.date > dateTo) return false;

      return true;
    });
  }, [rows, q, type, dateFrom, dateTo]);

  function exportCSV() {
    const header = ["ID", "Name", "Type of Check-up", "Date", "Staff", "Status"];
    const csv = [header.join(",")].concat(
      filtered.map((r) => [r.id, r.name, r.type, r.date, r.staff, r.status].map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
    ).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "health-records.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Health Records</h1>

        <div className="flex items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, ID, or diagnosis..."
            className="w-72 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
          />

          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
          />

          <select value={type} onChange={(e) => setType(e.target.value)} className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm">
            <option value="">All Types</option>
            <option>General Check-up</option>
            <option>Vaccination</option>
            <option>Follow-up</option>
            <option>Consultation</option>
          </select>

          <button onClick={exportCSV} className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm">Export CSV</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Type of Check-up</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Staff</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t hover:bg-blue-50">
                  <td className="py-3 px-4">{r.id}</td>
                  <td className="py-3 px-4">{r.name}</td>
                  <td className="py-3 px-4">{r.type}</td>
                  <td className="py-3 px-4">{r.date}</td>
                  <td className="py-3 px-4">{r.staff}</td>
                  <td className="py-3 px-4">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
