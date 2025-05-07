import React from 'react';
import Layout from '@/components/layout/Layout';
import LineChart from '@/components/dashboard/LineChart';
import StatCard from '@/components/dashboard/StatCard';
import Icons from '@/components/ui/Icons';

// Analytics data - for separation of concerns, in a real app this would likely be in a separate file
const analyticsStats = [
  {
    id: 1,
    title: 'Page Views',
    value: '48,325',
    change: { value: '8.2%', isPositive: true },
    icon: 'chart',
  },
  {
    id: 2,
    title: 'Bounce Rate',
    value: '42.3%',
    change: { value: '3.1%', isPositive: false },
    icon: 'bounce',
  },
  {
    id: 3,
    title: 'Avg. Session',
    value: '4m 23s',
    change: { value: '12%', isPositive: true },
    icon: 'clock',
  },
  {
    id: 4,
    title: 'Returning Users',
    value: '62.4%',
    change: { value: '5.3%', isPositive: true },
    icon: 'users',
  },
];

const trafficData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'This Week',
      data: [4200, 5100, 5800, 6200, 7400, 6800, 5100],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.3,
    },
    {
      label: 'Last Week',
      data: [3800, 4600, 5200, 5700, 6800, 6200, 4700],
      borderColor: 'rgb(100, 116, 139)',
      backgroundColor: 'rgba(100, 116, 139, 0.1)',
      fill: true,
      tension: 0.3,
    },
  ],
};

const conversionData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Conversion Rate',
      data: [3.2, 3.5, 3.8, 4.1, 3.9, 4.3],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
      tension: 0.3,
    }
  ],
};

export default function Analytics() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        
        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsStats.map((stat) => (
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
          <LineChart title="Website Traffic" data={trafficData} />
          <LineChart title="Conversion Rates" data={conversionData} />
        </div>
        
        {/* Additional Analytics Section */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {[
              { source: 'Direct', percentage: 35, color: 'bg-blue-500' },
              { source: 'Search', percentage: 28, color: 'bg-green-500' },
              { source: 'Social', percentage: 22, color: 'bg-purple-500' },
              { source: 'Referral', percentage: 15, color: 'bg-yellow-500' }
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.source}</span>
                  <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 