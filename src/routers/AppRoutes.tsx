import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { HomePage } from '../pages/HomePage';
import { UserSocialPage } from '../pages/UserSocialPage';

export function AppRoutes() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/share/:userID'
          element={<UserSocialPage />}
        />
        <Route
          path='/auth/*'
          element={<PublicRoutes isAuthenticated={isAuthenticated} />}
        />
        <Route
          path='/*'
          element={<PrivateRoutes isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
