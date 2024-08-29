import { Navigate, Route, Routes } from 'react-router-dom';

import { LinksProfile } from '../pages/LinksProfile';
import { DetailsProfile } from '../pages/DetailsProfile';

import { SettingsPage } from '../pages/SettingsPage';
import { PreviewProfile } from '../pages/PreviewProfile';

interface Props {
  isAuthenticated: boolean;
}

export const PrivateRoutes: React.FC<Props> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to='/auth/login' />;
  }
  return (
    <div className='bg-slate-200/60 py-4 md:p-4 min-h-screen'>
      <Routes>
        <Route
          path='/links'
          element={<LinksProfile />}
        />
        <Route
          path='/details'
          element={<DetailsProfile />}
        />
        <Route
          path='/preview'
          element={<PreviewProfile />}
        />
        <Route
          path='/settings'
          element={<SettingsPage />}
        />
      </Routes>
    </div>
  );
};
