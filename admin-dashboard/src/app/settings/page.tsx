"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';

interface SettingsTab {
  id: string;
  name: string;
}

const tabs: SettingsTab[] = [
  { id: 'account', name: 'Account' },
  { id: 'security', name: 'Security' },
  { id: 'notifications', name: 'Notifications' },
  { id: 'appearance', name: 'Appearance' },
  { id: 'integrations', name: 'Integrations' },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('account');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    updates: true,
    marketing: false,
    activity: true,
  });
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
              <p className="mt-1 text-sm text-gray-500">Update your account's profile information.</p>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <form className="p-6 space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-24 w-24 rounded-full bg-primary-600 flex items-center justify-center text-white text-3xl font-medium">
                      A
                    </div>
                  </div>
                  <div className="ml-5">
                    <div className="rounded-md shadow-sm">
                      <div className="mt-1 flex items-center">
                        <button
                          type="button"
                          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        defaultValue="Admin"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        defaultValue="User"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        defaultValue="admin@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
        
      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Security Settings</h3>
              <p className="mt-1 text-sm text-gray-500">Manage your password and account security.</p>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <form className="p-6 space-y-6">
                <div>
                  <h4 className="text-md font-medium text-gray-900">Change Password</h4>
                  <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="current_password" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          name="current_password"
                          id="current_password"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-6">
                      <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          name="new_password"
                          id="new_password"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-6">
                      <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          name="confirm_password"
                          id="confirm_password"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-900">Two-Factor Authentication</h4>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Enable Two-Factor Authentication
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
        
      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Notification Settings</h3>
              <p className="mt-1 text-sm text-gray-500">Manage how and when you receive notifications.</p>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-md font-medium text-gray-900">Email Notifications</h4>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="updates"
                          name="updates"
                          type="checkbox"
                          checked={emailNotifications.updates}
                          onChange={(e) => setEmailNotifications({...emailNotifications, updates: e.target.checked})}
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="updates" className="font-medium text-gray-700">Product updates</label>
                        <p className="text-gray-500">Get notified when we release new features and updates.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="marketing"
                          name="marketing"
                          type="checkbox"
                          checked={emailNotifications.marketing}
                          onChange={(e) => setEmailNotifications({...emailNotifications, marketing: e.target.checked})}
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="marketing" className="font-medium text-gray-700">Marketing emails</label>
                        <p className="text-gray-500">Receive emails about promotions, discounts, and events.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="activity"
                          name="activity"
                          type="checkbox"
                          checked={emailNotifications.activity}
                          onChange={(e) => setEmailNotifications({...emailNotifications, activity: e.target.checked})}
                          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="activity" className="font-medium text-gray-700">Account activity</label>
                        <p className="text-gray-500">Get important notifications about your account activity.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Appearance Settings</h3>
              <p className="mt-1 text-sm text-gray-500">Customize the look and feel of your dashboard.</p>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-md font-medium text-gray-900">Theme</h4>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setIsDarkMode(false)}
                        className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                          !isDarkMode ? 'bg-primary-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className="sr-only">Use light mode</span>
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                            !isDarkMode ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <span className="ml-3" id="theme-label">
                        <span className="text-sm font-medium text-gray-900">Light / Dark Mode</span>
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {isDarkMode ? 'Currently using dark mode.' : 'Currently using light mode.'}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'integrations':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Integrations</h3>
              <p className="mt-1 text-sm text-gray-500">Connect with third-party services.</p>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  {[
                    { name: 'Google Analytics', connected: true, icon: 'G' },
                    { name: 'Slack', connected: false, icon: 'S' },
                    { name: 'GitHub', connected: true, icon: 'GH' },
                    { name: 'Dropbox', connected: false, icon: 'D' },
                  ].map((integration) => (
                    <div key={integration.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-medium text-gray-700">
                          {integration.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">{integration.name}</h4>
                          <p className="text-xs text-gray-500">
                            {integration.connected ? 'Connected' : 'Not connected'}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className={`px-3 py-1.5 text-xs font-medium rounded-md ${
                          integration.connected
                            ? 'text-red-700 bg-red-100 hover:bg-red-200'
                            : 'text-primary-700 bg-primary-100 hover:bg-primary-200'
                        }`}
                      >
                        {integration.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        
        <div className="bg-white shadow-sm rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm
                    ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </Layout>
  );
} 