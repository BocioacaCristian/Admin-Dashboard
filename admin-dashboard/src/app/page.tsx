import React from 'react';
import Layout from '@/components/layout/Layout';
import StatCard from '@/components/dashboard/StatCard';
import LineChart from '@/components/dashboard/LineChart';
import RecentActivity from '@/components/dashboard/RecentActivity';
import Icons from '@/components/ui/Icons';
import { statCardData, revenueChartData, userChartData, recentActivities } from '@/lib/dashboardData';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCardData.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={<Icons type={stat.icon as any} />}
            />
          ))}
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart title="Revenue Overview" data={revenueChartData} />
          <LineChart title="User Analytics" data={userChartData} />
        </div>
        
        {/* Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Top Locations</h3>
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
                <p className="text-gray-500">Map visualization goes here</p>
              </div>
            </div>
          </div>
          <div>
            <RecentActivity activities={recentActivities} />
          </div>
        </div>
      </div>
    </Layout>
  );
} 