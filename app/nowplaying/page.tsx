// components/Layout.tsx
import React from 'react';
import { Aurora } from '@/components/aurora';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Aurora />      
    </div>
  );
};

export default Layout;