import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './Routes';
import './App.scss';
import AuthPage from './pages/AuthPage';

const App: React.FC = () => {
  if (!localStorage.getItem('token') && !sessionStorage.getItem('token'))
    return <AuthPage />;

  return (
    <div className="App">
      <Header />
      <main className="container">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
