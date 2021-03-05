import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
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
    <Container>
      <Row>
        {countries.map((item) => (
          <Col key={item.title}>
            <Link to="/country/">
              <span>{item.title}</span>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MainPage;
