import { Button, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import QierPlayer from 'qier-player';
// import DateTime from '../Helpers/DateTime';
import Rate from '../Rate/Rate';
import Map from '../Helpers/Map';
import { Country as CountryType } from '../../stores/country';
import Loader from '../Loader/Loader';
import UiStore from '../../stores/ui-store';
import translations from '../../libs/translations';
import Widgets from '../Helpers/Widgets/Widgets';

import './country.scss';

type Props = {
  country: CountryType;
};

const Country: React.FC<Props> = ({ country }) => {
  const t = translations[UiStore.language];
  const lat: number = country?.data?.capitalLat || 0;
  const lon: number = country?.data?.capitalLon || 0;

  return country?.isLoading ? (
    <Loader />
  ) : (
    <div className="country-box">
      <Row>
        <Col>
          <div className="country-title-box">
            <div className="country-title-left">
              <h3>{country?.data?.name}</h3>
            </div>
            <div className="country-title-right mb-1">
              <Link to="/">
                <Button>Back</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-lg-9">
          <div>
            <Row>
              <Col className="col-12 col-md-4">
                <img
                  className="country-img"
                  src={country?.data?.image}
                  width="255px"
                  alt=""
                />
                <div className="country-video">
                  <QierPlayer
                    width={255}
                    height={200}
                    language="en"
                    showVideoQuality={false}
                    themeColor="#abc123"
                    srcOrigin={country?.data?.video}
                  />
                </div>
              </Col>
              <Col className="col-12 col-md-8">
                <div className="dfc">
                  <div className="j46 mb15">
                    <h4>{t.description}</h4>
                  </div>
                  <span className="mb15">{country?.data?.description}</span>
                  <div>
                    <Row>
                      <Col>
                        <div className="dfc">
                          <h5>{t.capital}</h5>
                          <span>{country?.data?.capital}</span>
                        </div>
                      </Col>
                      <Col>
                        <div className="dfc">
                          <span className="ml5">{t.rating}</span>
                          <Rate
                            onChange={() => {}}
                            value={Number(country?.data?.stars)}
                          />
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
                  <Gallery
                    backdropClosesModal
                    images={country?.data?.attractions || []}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="col-12 col-lg-3">
          <Widgets timeZone={country?.data?.timeZone} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="map_box" id="mapbox/streets-v11">
            <Map capitalLat={lat} capitalLon={lon} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default observer(Country);
