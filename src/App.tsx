import { Switch } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './Routes';
import AuthPage from './pages/AuthPage';
import UiStore from './stores/ui-store';

import './App.scss';

const App: React.FC = () => {
  const isAuthenticated =
    localStorage.getItem('token') || sessionStorage.getItem('token');

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Header />
          <main className="container">
            <Switch>
              <Routes />
            </Switch>
          </main>
          <Footer />
        </>
      ) : (
        <AuthPage />
      )}

      <Toast
        onClose={() => UiStore.clearNotification()}
        show={UiStore.isShowNotification}
        delay={2000}
        autohide
        style={{
          position: 'absolute',
          top: '3%',
          right: '1%',
          zIndex: 10,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Warning</strong>
          <small>Now</small>
        </Toast.Header>
        <Toast.Body>{UiStore.notification}</Toast.Body>
      </Toast>
    </div>
  );
};

export default observer(App);
