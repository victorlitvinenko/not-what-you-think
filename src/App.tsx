import { Toast } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './Routes';
import './App.scss';
import AuthPage from './pages/AuthPage';
import UiStore from './stores/ui-store';

const App: React.FC = () => {
  if (!localStorage.getItem('token') && !sessionStorage.getItem('token'))
    return (
      <>
        <AuthPage />
        <Toast
          onClose={UiStore.clearNotification}
          show={UiStore.isShowNotification}
          delay={1500}
          autohide
        >
          <Toast.Header>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{UiStore.notification}</Toast.Body>
        </Toast>
      </>
    );

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
