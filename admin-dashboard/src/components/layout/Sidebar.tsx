"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icons from '@/components/ui/Icons';

type NavItem = {
  name: string;
  href: string;
  icon: string;
};

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: 'revenue' },
  { name: 'Analytics', href: '/analytics', icon: 'chart' },
  { name: 'Users', href: '/users', icon: 'users' },
  { name: 'Settings', href: '/settings', icon: 'settings' },
  { name: 'Notifications', href: '/notifications', icon: 'notifications' },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string): boolean => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path) ?? false;
  };

  return (
    <div className="h-screen flex flex-col bg-white border-r border-gray-200 w-64">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-primary-600">Admin Dashboard</h1>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group flex items-center px-2 py-2 text-sm font-medium rounded-md
                ${
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
            >
              <span className="mr-3">
                <Icons type={item.icon as any} className={isActive(item.href) ? "text-primary-600" : "text-gray-400"} />
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
              A
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs font-medium text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 