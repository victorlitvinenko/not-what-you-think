import { Button, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import { Link } from 'react-router-dom';
import DateTime from '../Helpers/DateTime';
import Rate from '../Rate/Rate';
import Map from '../Helpers/Map';

import './country.scss';
import { CountryType } from '../../stores/country-store';

type Props = {
  countryData: CountryType | undefined;
};

const Country: React.FC<Props> = (props) => {
  const { countryData } = props;
  const images = [
    {
      src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
      thumbnail:
        'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: 'After Rain (Jeshu John - designerspics.com)',
    },
    {
      src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
      thumbnail:
        'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: 'Ocean', title: 'Ocean' },
        { value: 'People', title: 'People' },
      ],
      caption: 'Boats (Jeshu John - designerspics.com)',
    },

    {
      src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
      thumbnail:
        'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ];
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
        <Col className="col-12 col-sm-9">
          <div>
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
                          <Rate
                            onChange={() => {}}
                            value={Number(countryData?.stars)}
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
          <div className="country_widgets_box">WIDGETS HERE</div>
        </Col>
      </Row>
    </div>
  );
};
export default Country;
