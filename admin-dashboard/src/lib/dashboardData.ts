// Sample data for dashboard charts and statistics

export const statCardData = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$24,560',
    change: { value: '12%', isPositive: true },
    icon: 'revenue',
  },
  {
    id: 2,
    title: 'Active Users',
    value: '1,234',
    change: { value: '5.3%', isPositive: true },
    icon: 'users',
  },
  {
    id: 3,
    title: 'Conversion Rate',
    value: '3.2%',
    change: { value: '0.5%', isPositive: false },
    icon: 'conversion',
  },
  {
    id: 4,
    title: 'Avg. Session',
    value: '3m 12s',
    change: { value: '2.1%', isPositive: true },
    icon: 'session',
  },
];

export const revenueChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue 2023',
      data: [12000, 19000, 15000, 20000, 25000, 22000, 30000, 28000, 25000, 27000, 32000, 35000],
      borderColor: 'rgb(14, 165, 233)',
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      fill: true,
      tension: 0.3,
    },
    {
      label: 'Revenue 2022',
      data: [10000, 15000, 13000, 17000, 21000, 19000, 25000, 22000, 20000, 21000, 24000, 26000],
      borderColor: 'rgb(100, 116, 139)',
      backgroundColor: 'rgba(100, 116, 139, 0.1)',
      fill: true,
      tension: 0.3,
    },
  ],
};

export const userChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'New Users',
      data: [120, 190, 150, 200, 250, 220, 300, 280, 250, 270, 320, 350],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
      tension: 0.3,
    },
    {
      label: 'Active Users',
      data: [450, 520, 500, 570, 600, 580, 650, 680, 670, 700, 750, 780],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.3,
    },
  ],
};

export const recentActivities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'Created a new post',
    timestamp: '5 min ago',
    avatar: '/images/avatar1.png',
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'Updated profile',
    timestamp: '15 min ago',
    avatar: '/images/avatar2.png',
  },
  {
    id: 3,
    user: 'Robert Johnson',
    action: 'Purchased Premium Plan',
    timestamp: '1 hour ago',
    avatar: '/images/avatar3.png',
  },
  {
    id: 4,
    user: 'Emily Clark',
    action: 'Shared a document',
    timestamp: '2 hours ago',
    avatar: '/images/avatar4.png',
  },
  {
    id: 5,
    user: 'Michael Wilson',
    action: 'Left a comment',
    timestamp: '4 hours ago',
    avatar: '/images/avatar5.png',
  },
]; 