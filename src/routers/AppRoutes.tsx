import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { HomePage } from '../pages/HomePage';
import { UserSocialPage } from '../pages/UserSocialPage';
import { useEffect, useState } from 'react';
import { authFirebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/auth.slice';

export function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    authFirebase.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || '',
            photoURL: user.photoURL || '',
          })
        );
        setIsAuthenticated(true);
        setChecking(false);
      } else {
        setIsAuthenticated(false);
        setChecking(false);
      }
    });
  }, [isAuthenticated, dispatch]);

  if (checking) {
    return <h1>Loading...</h1>;
  }

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
