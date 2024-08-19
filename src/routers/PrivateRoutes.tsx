import { Navigate, Route, Routes } from 'react-router-dom';
import { ProfilePage } from '../pages/ProfilePage';
import { SettingsPage } from '../pages/SettingsPage';

interface Props {
  isAuthenticated: boolean;
}

export const PrivateRoutes: React.FC<Props> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to='/auth/login' />;
  }
  return (
    <Routes>
      <Route
        path='/profile'
        element={<ProfilePage />}
      />
      <Route
        path='/settings'
        element={<SettingsPage />}
      />
    </Routes>
  );
};
