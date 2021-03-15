import { Button, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import DateTime from '../Helpers/DateTime';
import Rate from '../Rate/Rate';
import Map from '../Helpers/Map';
import { Country as CountryType } from '../../stores/country';
import Loader from '../Loader/Loader';
import UiStore from '../../stores/ui-store';
import translations from '../../libs/translations';
import Widgets from '../Helpers/Widgets/Widgets';

import './country.scss';

type Props = {
  country: CountryType | undefined;
};

const Country: React.FC<Props> = ({ country }) => {
  const t = translations[UiStore.language];

  const images = [
    {
      src: 'http://i.ytimg.com/vi/M8esst8xBvI/maxresdefault.jpg',
      thumbnail: 'http://i.ytimg.com/vi/M8esst8xBvI/maxresdefault.jpg',
      caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
      src: 'https://luckclub.ru/images/luckclub/2018/08/s1200-4.jpg',
      thumbnail: 'https://luckclub.ru/images/luckclub/2018/08/s1200-4.jpg',
      caption: 'Boats (Jeshu John - designerspics.com)',
    },
    {
      src:
        'https://m.fishki.net/upload/users/2020/05/12/482/214decef8fb9932f637e5c1c0b837ece.jpg',
      thumbnail:
        'https://m.fishki.net/upload/users/2020/05/12/482/214decef8fb9932f637e5c1c0b837ece.jpg',
    },
  ];

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
        <Col className="col-12 col-sm-9">
          <div>
            <Row>
              <Col className="col-12 col-md-4">
                <img
                  className="country-img"
                  src={country?.data?.image}
                  alt=""
                />
              </Col>
              <Col className="col-12 col-md-8">
                <div className="dfc">
                  <div className="j46 mb15">
                    <span>{t.description}</span>
                    <a href="https://www.youtube.com/">
                      Check video about this country
                    </a>
                  </div>
                  <span className="mb15">{country?.data?.description}</span>
                  <div>
                    <Row>
                      <Col>
                        <div className="dfc">
                          <span>{t.capital}</span>
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
                  <h5>{t.attractions}</h5>
                  <Gallery images={images} />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                {/* <div>map</div> */}
                <div className="map_box" id="mapbox/streets-v11">
                  <Map />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="col-12 col-sm-3">
          <Widgets location="Minsk" />
        </Col>
      </Row>
    </div>
  );
};
export default observer(Country);
