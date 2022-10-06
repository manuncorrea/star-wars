import { Routes, Route, Navigate } from 'react-router-dom';

import { Characters } from '../pages/Characters';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Spaceships } from '../pages/Spaceship';

//@ts-ignore
const PublicRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('user_token') === null;
  console.log('isAuth: ', isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/nave-espacial' element={<Spaceships />} />

      <Route path='/login'

        element={
          <PublicRoute redirectTo='/'>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path='/cadastrar'
        element={
          <PublicRoute redirectTo='/'>
            <SignUp />
          </PublicRoute>
        }
      />
    </Routes>
  );
}