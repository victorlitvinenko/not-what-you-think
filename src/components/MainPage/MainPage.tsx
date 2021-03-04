import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Country from '../Country/Country';

const MainPage = () => {
  const countries = [
    {
      title: 'test',
      capital: '',
      picture: '',
    },
    {
      title: 'test2',
      capital: '',
      picture: '',
    },
  ];
  return (
    <div className="main-page">
      <Header />
      <Row>
        {countries.map((item, index) => (
          <Col>
            <Country />
          </Col>
        ))}
      </Row>
      <Footer />
    </div>
  );
};
export default MainPage;
