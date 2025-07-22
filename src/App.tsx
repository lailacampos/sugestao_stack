import './App.css'
import AppRoutes from './routes/routes';
import MainLayout from './components/layout/MainLayout'; // importe o layout

const App: React.FC = () => {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}

export default App;
