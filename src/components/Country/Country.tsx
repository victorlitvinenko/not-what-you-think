import { Carousel, Row, Col } from 'react-bootstrap';
import DateTime from '../Helpers/DateTime';
import img from '../../media/images/img.jpg';
import CountriesCarousel from '../Helpers/CountriesCarousel';
import './country.scss';
import '../../index.css';
import slide1 from '../../media/images/slide1.jpg';
import slide2 from '../../media/images/slide2.jpg';
import slide3 from '../../media/images/slide3.jpg';

const Country: React.FC = () => {
  return (
    <div className="country-box">
      <Row>
        <Col>
          <div className="country-title-box">
            <div className="country-title-left">
              <h3>Country name</h3>
              <span>breadcrumbs</span>
            </div>
            <div className="country-title-right">
              <DateTime />
              <span>weather</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="col-12 col-md-6">
          <img className="country-img" src={img} alt="" />
        </Col>
        <Col className="col-12 col-md-6">
          <div className="dfc">
            <div className="j46 mb15">
              <span>Description</span>
              <a href="https://www.youtube.com/">
                Check video about this country
              </a>
            </div>
            <span className="mb15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <div>
              <Row>
                <Col>
                  <div className="dfc">
                    <span>Capital</span>
                    <span>Minsk</span>
                  </div>
                </Col>
                <Col>
                  <div className="dfc">
                    <span>Stars</span>
                    <span>Star Star Star</span>
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
          <Carousel>
            <Carousel.Item>
              <img src={slide1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide2} alt="First slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide3} alt="First slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* <CountriesCarousel /> */}
        </Col>
      </Row>

      <Row>
        <Col>
          <div>map</div>
        </Col>
      </Row>
    </div>
  );
};
export default Country;
