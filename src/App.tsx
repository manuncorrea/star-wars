import { Header } from './components/Header';
import './styles/global.css';
import { AppRoutes } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
