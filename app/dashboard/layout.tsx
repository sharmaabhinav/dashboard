import React from 'react';
import SideNav from '../ui/dashboard/sidenav';

const DashboardLayout = ({ children }: {children: React.ReactNode}) => {
  console.log('dashboard layout');
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:p-12'>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
