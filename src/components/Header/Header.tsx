import { Button, Form, FormControl, Navbar } from 'react-bootstrap';
import UserStore from '../../stores/user-store';
import './header.scss';

const Header: React.FC = () => {
  return (
    <Navbar
      className="justify-content-between align-items-center"
      bg="light"
      variant="light"
    >
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search country"
          className="mr-sm-2"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
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
