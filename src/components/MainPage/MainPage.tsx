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
      <div className="container">
        <div className="row">
          <img
            className="country_img"
            src={`${process.env.PUBLIC_URL}./travelIcon.png`}
            alt=""
          />
          {countries.map((item, index) => (
            <div className="col-6">
              <Country />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
