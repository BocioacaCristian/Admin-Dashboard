import React from 'react';
import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'A modern admin dashboard built with React, Next.js, TypeScript, Tailwind CSS, and Chart.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 