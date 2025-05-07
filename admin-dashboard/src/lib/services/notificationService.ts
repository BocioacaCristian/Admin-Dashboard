// Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}

// Mock data
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Update',
    message: 'System has been updated to the latest version',
    time: '5 minutes ago',
    read: false,
    type: 'info',
  },
  {
    id: '2',
    title: 'New User',
    message: 'New user registered: Jane Smith',
    time: '1 hour ago',
    read: false,
    type: 'success',
  },
  {
    id: '3',
    title: 'Server Alert',
    message: 'Server load is high, consider optimizing',
    time: '2 hours ago',
    read: true,
    type: 'warning',
  },
  {
    id: '4',
    title: 'Maintenance',
    message: 'Scheduled maintenance on June 15th',
    time: '1 day ago',
    read: true,
    type: 'info',
  },
  {
    id: '5',
    title: 'Payment Failed',
    message: 'Monthly subscription payment failed',
    time: '2 days ago',
    read: true,
    type: 'error',
  },
  {
    id: '6',
    title: 'New Feature',
    message: 'Analytics dashboard has new features',
    time: '3 days ago',
    read: true,
    type: 'success',
  },
  {
    id: '7',
    title: 'Security Alert',
    message: 'Multiple failed login attempts detected',
    time: '4 days ago',
    read: true,
    type: 'warning',
  },
];

// In a real application, these would connect to an API
export const notificationService = {
  // Get all notifications
  getNotifications: async (): Promise<Notification[]> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockNotifications;
  },
  
  // Get unread count
  getUnreadCount: async (): Promise<number> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockNotifications.filter(notification => !notification.read).length;
  },
  
  // Mark notification as read
  markAsRead: async (id: string): Promise<Notification> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    const notification = mockNotifications.find(n => n.id === id);
    
    if (!notification) {
      throw new Error('Notification not found');
    }
    
    notification.read = true;
    return notification;
  },
  
  // Mark all notifications as read
  markAllAsRead: async (): Promise<Notification[]> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    mockNotifications.forEach(notification => {
      notification.read = true;
    });
    
    return mockNotifications;
  },
  
  // Delete notification
  deleteNotification: async (id: string): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = mockNotifications.findIndex(notification => notification.id === id);
    
    if (index !== -1) {
      mockNotifications.splice(index, 1);
    }
  },
}; 