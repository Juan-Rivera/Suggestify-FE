import React from 'react';
import PrivateRoute from '../../utils/PrivateRoute';

import DashNav from './DashNav';
import Search from './search/Search';
import SavedSongs from './savedSongs/SavedSongs'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <h2>Dashboard</h2>
      <DashNav />
        {/* Profile component */}
        <PrivateRoute path='/dashboard/search' >
          <Search />
        </PrivateRoute>
        <PrivateRoute path='/dashboard/savedSongs' >
          <SavedSongs />  
        </PrivateRoute>

    </div>
  )
}

export default Dashboard