import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './Routes';
import './App.scss';

const App: React.FC = () => {
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
