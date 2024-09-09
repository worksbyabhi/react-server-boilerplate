import React, { useEffect } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { LayoutComponent } from './components/layout';

import { UserDashboard } from './routes/Dashboard';
import { AddPricing } from './routes/AddPricing';
import { LoginComponent } from './routes/Login';
import { useUserContext } from './store/LoggedUserStore';
import { getUrl } from './utils';

const App = () => {
  const { user, updateUser, clearUser } = useUserContext();
  const navigateTo = useNavigate();

  useEffect(() => {
    fetch(getUrl('/session'), {
      credentials: 'include',
    })
      .then((response) => {
        // console.log(response.headers.get("content-type"));
        if (!response.ok) {
          throw new Error('Invalid session');
        }
        return response.json();
      })
      .then((data) => {
        if (data.username && data.role) {
          updateUser(data);
        }
      })
      .catch(() => {
        clearUser();
        navigateTo('/');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutComponent>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/add-pricing" element={<AddPricing />} />
          </>
        ) : (
          <Route path="/" element={<LoginComponent />} />
        )}
      </Routes>
    </LayoutComponent>
  );
};

export default App;
