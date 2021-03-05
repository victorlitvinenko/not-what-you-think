import { Col } from 'react-bootstrap';
import Country from '../Country/Country';

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
    <div className="main-page">
      {countries.map(() => (
        <Col>
          <Country />
        </Col>
      ))}
    </div>
  );
};
export default MainPage;
