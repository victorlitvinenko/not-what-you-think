import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Row, Col } from 'react-bootstrap';
import DateTime from '../Helpers/DateTime';
import img from '../../media/images/img.jpg';
import CountriesCarousel from '../Helpers/CountriesCarousel';
import Map from '../Helpers/Map';
import './country.scss';

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
        <Col className="col-12 col-md-4">
          <img className="country-img" src={img} alt="" />
        </Col>
        <Col className="col-12 col-md-8">
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
          <CountriesCarousel />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}
          {/* <Map /> */}
        </Col>
      </Row>
    </div>
  );
};
export default Country;
