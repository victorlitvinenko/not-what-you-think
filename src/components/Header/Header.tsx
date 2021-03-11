import { Button, Form, FormControl, Navbar } from 'react-bootstrap';
import UserStore from '../../stores/user-store';
import './header.scss';
// import { GG } from '../../assets/images/united_kingdom_flag.png';

const Header: React.FC = () => {
  return (
    <Navbar
      className="justify-content-between align-items-center"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search country"
          className="mr-sm-2"
        />
        <Button variant="outline-primary">Search</Button>
        <Form.Group className="ml-3" controlId="exampleForm.SelectCustomSizeSm">
          <Form.Control as="select" custom>
            <option value="GB">🇬🇧</option>
            <option value="RU">🇷🇺</option>
            <option value="CN">🇨🇳</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <div className="block">
        <img src="" alt="img user" />
        <a href="https://png.icons8.com/firewall/color">Name(Login)</a>
        <Button onClick={() => UserStore.logout()} variant="primary">
          Sign out
        </Button>
      </div>
    </Navbar>
  );
};
export default Header;
