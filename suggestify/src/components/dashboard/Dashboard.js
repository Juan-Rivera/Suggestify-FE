import React from 'react';
import PrivateRoute from '../../utils/PrivateRoute';

import DashNav from './DashNav';
import Profile from './profile/Profile';
import UpdateProfile from './profile/UpdateProfile'
import Search from './search/Search';
import SavedSongs from './savedSongs/SavedSongs'

const Dashboard = () => {
  return (
    <div className="dashboard">
        <h2>Dashboard</h2>
      <DashNav />
        {/* Profile components */}
        <PrivateRoute path='/dashboard/profile/:id' >
          <Profile />
        </PrivateRoute>
        <PrivateRoute path='/dashboard/update-profile/:id' >
          <UpdateProfile />
        </PrivateRoute>
        {/* Search component */}
        <PrivateRoute path='/dashboard/search' >
          <Search />
        </PrivateRoute>
        {/* Saved Songs component */}
        <PrivateRoute path='/dashboard/savedSongs' >
          <SavedSongs />  
        </PrivateRoute>

    </div>
  )
}

export default Dashboard