import React from 'react';

import DashNav from './DashNav';
import Search from './search/Search';

function Dashboard() {

  return (
    <div className="dashboard">
        <h2>Dashboard</h2>
      <DashNav />
        {/* Profile component */}
        {/* Search component */}
      <Search />
        {/* Saved Songs Component */}

    </div>
  )
}
export default Dashboard;