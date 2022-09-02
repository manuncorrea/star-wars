import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';

import { Header } from './components/Header';

import './styles/global.css';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
