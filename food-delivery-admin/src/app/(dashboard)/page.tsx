"use client";

import PageHeading from "@/components/ui/page-heading";
import React from "react";


const Dashboard = () => {
  // Example static data — ideally fetch from API
  const stats = [
    { label: "Orders Today", value: 124 },
    { label: "Total Sales", value: "$8,230" },
    { label: "Pending Orders", value: 17 },
    { label: "Active Users", value: 320 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <PageHeading title="Dashboard" />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center"
          >
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-semibold text-orange-600 mt-1">{value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-orange-100">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">Order ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">Total</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-orange-600 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Sample static rows */}
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">#00123</td>
                <td className="px-4 py-3 whitespace-nowrap">John Doe</td>
                <td className="px-4 py-3 whitespace-nowrap">$45.00</td>
                <td className="px-4 py-3 whitespace-nowrap text-green-600 font-semibold">Delivered</td>
                <td className="px-4 py-3 whitespace-nowrap">2025-06-25</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap">#00124</td>
                <td className="px-4 py-3 whitespace-nowrap">Jane Smith</td>
                <td className="px-4 py-3 whitespace-nowrap">$22.00</td>
                <td className="px-4 py-3 whitespace-nowrap text-yellow-600 font-semibold">Pending</td>
                <td className="px-4 py-3 whitespace-nowrap">2025-06-26</td>
              </tr>
              {/* Add more rows or load dynamically */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
