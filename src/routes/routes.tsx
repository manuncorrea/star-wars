import {Routes, Route } from 'react-router-dom';
import { Characters } from '../pages/Characters';
import { Spaceships } from '../pages/Spaceship';


export function AppRoutes() {
  return (
  
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/nave-espacial' element={<Spaceships />} />
      </Routes>
  );
}