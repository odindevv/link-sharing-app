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
    <div className='flex flex-col justify-center items-center space-y-8 bg-slate-200/60 min-h-screen'>
      <img
        src='/logo-devlinks-large.svg'
        className='relative top-4 inset-0 w-[250px]'
        alt=''
      />
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
    </div>
  );
};
