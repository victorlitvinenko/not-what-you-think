import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DateTime from '../Helpers/DateTime';
import CountriesCarousel from '../Helpers/CountriesCarousel';
import Map from '../Helpers/Map';
import Rate from '../Rate/Rate';
import img from '../../media/images/img.jpg';
import './country.scss';
import '../../index.css';

type CountryType = {
  capital: string;
  description: string;
  image: string;
  name: string;
  stars: string;
  feedback: any;
};

type Props = {
  countryData: CountryType | undefined;
};

const Country: React.FC<Props> = (props) => {
  const { countryData } = props;

  return (
    <div className="country-box">
      <Row>
        <Col>
          <div className="country-title-box">
            <div className="country-title-left">
              <h3>{countryData?.name}</h3>
              <span>breadcrumbs</span>
            </div>
            <div className="country-title-center">
              <DateTime />
              <span>weather</span>
            </div>
            <div className="country-title-right">
              <Link to="/">
                <Button>Back</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="col-12 col-md-4">
          <img className="country-img" src={countryData?.image} alt="" />
        </Col>
        <Col className="col-12 col-md-8">
          <div className="dfc">
            <div className="j46 mb15">
              <span>Description</span>
              <a href="https://www.youtube.com/">
                Check video about this country
              </a>
            </div>
            <span className="mb15">{countryData?.description}</span>
            <div>
              <Row>
                <Col>
                  <div className="dfc">
                    <span>Capital</span>
                    <span>{countryData?.capital}</span>
                  </div>
                </Col>
                <Col>
                  <div className="dfc">
                    <span className="ml5">Rate country</span>
                    <Rate onChange={() => {}} value={countryData?.feedback} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="mt25">
            <h5>Attraction</h5>
          </div>
          <CountriesCarousel />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* <div>map</div> */}
          <Map />
        </Col>
      </Row>
    </div>
  );
};
export default Country;
