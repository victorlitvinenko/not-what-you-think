import { Container, Row, Col } from 'react-bootstrap';
import img from '../../media/images/img.jpg';
import './country.scss';

const Country: React.FC = () => {
  return (
    <div className="country-box">
      <Container>
        <Row>
          <Col>
            <div className="country-title-box">
              <div className="country-title-left">
                <h3>Country name</h3>
                <span>breadcrumbs</span>
              </div>
              <div className="country-title-right">
                <span className="mr5">time</span>
                <span className="mr5">date</span>
                <span>weather</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="df mb15">
            <Col>
              <img className="country-img" src={img} alt="" />
            </Col>
            <Col>
              <div className="dfc">
                <div className="j46 mb15">
                  <span>Description</span>
                  <a href="https://www.youtube.com/">
                    Check video about this country
                  </a>
                </div>
                <span className="mb15">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
          </div>
        </Row>

        <Row>
          <Col>
            <div>
              <h5>Attraction</h5>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>map</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Country;
