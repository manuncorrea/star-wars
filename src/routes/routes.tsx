import {Routes, Route } from 'react-router-dom';

import { Characters } from '../pages/Characters';
import { DetailsCharacters } from '../pages/Characters/DetailsCharacters';
import { Spaceships } from '../pages/Spaceship';
import { Weapons } from '../pages/Weapons';

export function AppRoutes() {
  return (
  
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/characters/:id' element={<DetailsCharacters />} />
        
        <Route path="/armas" element={<Weapons />} />
        <Route path='/nave-espacial' element={<Spaceships />} />
      </Routes>
  );
}