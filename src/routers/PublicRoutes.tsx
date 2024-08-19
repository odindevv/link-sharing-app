import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

interface Props {
  isAuthenticated: boolean;
}

export const PublicRoutes: React.FC<Props> = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to='/' />;
  }
  return (
    <Routes>
      <Route
        path='/login'
        element={<LoginPage />}
      />
      <Route
        path='/register'
        element={<RegisterPage />}
      />
    </Routes>
  );
};
