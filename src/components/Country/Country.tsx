import { Button, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import QierPlayer from 'qier-player';
import Rate from '../Rate/Rate';
import Map from '../Helpers/Map';
import { Country as CountryType } from '../../stores/country';
import Loader from '../Loader/Loader';
import UiStore from '../../stores/ui-store';
import translations from '../../libs/translations';
import Widgets from '../Helpers/Widgets/Widgets';

import './country.scss';
import Feedback from '../Feedback/Feedback';

type Props = {
  country: CountryType;
  id: string;
};

const Country: React.FC<Props> = ({ country, id }) => {
  const t = translations[UiStore.language];
  const lat: number = country?.data?.capitalLat || 0;
  const lon: number = country?.data?.capitalLon || 0;
  const feedbacks: Record<string, string>[] = country?.data?.feedback || [
    { text: '' },
  ];
  let stars = 0;
  feedbacks.forEach((item) => {
    stars += +item.stars;
  });

  const modefiedAttractions = country?.data?.attractions.map((item) => ({
    ...item,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
  }));

  return country?.isLoading ? (
    <Loader />
  ) : (
    <div className="country-box">
      <Row>
        <Col>
          <div className="country-title-box">
            <div className="country-title-left">
              <h3>{country?.data?.name}</h3>
              <span>breadcrumbs</span>
            </div>
            <div className="country-title-center" />
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
                            value={stars / feedbacks.length}
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
                    thumbnailWidth={100}
                    images={modefiedAttractions || []}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="col-12 col-sm-3">
          <div className="widgets__background" />
          <Widgets
            timeZone={country?.data?.timeZone}
            capital={country?.data?.capital}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="map_box" id="mapbox/streets-v11">
            <Map capitalLat={lat} capitalLon={lon} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Feedback id={id} t={t} data={feedbacks} />
        </Col>
      </Row>
    </div>
  );
};
export default observer(Country);
