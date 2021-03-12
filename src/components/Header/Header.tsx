import { observer } from 'mobx-react-lite';
import { Button, Form, FormControl, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import UiStore from '../../stores/ui-store';
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
      <NavLink to="/">
        <Navbar.Brand>LOGO</Navbar.Brand>
      </NavLink>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search country"
          className="mr-sm-2"
        />
        <Button variant="outline-primary">Search</Button>
        <Form.Group className="ml-3" controlId="exampleForm.SelectCustomSizeSm">
          <Form.Control
            as="select"
            custom
            value={UiStore.language}
            onChange={({ target: { value } }) => UiStore.setLanguage(value)}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="cn">CN</option>
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
export default observer(Header);
