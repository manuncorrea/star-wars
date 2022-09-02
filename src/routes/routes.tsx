import {Routes, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Characters } from '../pages/Characters';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Spaceships } from '../pages/Spaceship';


export function AppRoutes() {
  

  return (
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/nave-espacial' element={<Spaceships />} />

        <Route path='/login' element={<SignIn />} />
        <Route path='/cadastrar' element={<SignUp />} />
      </Routes>
  );
}