import { Container, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Routes />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
