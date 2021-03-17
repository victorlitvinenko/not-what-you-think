import { observer } from 'mobx-react-lite';
import { Button, Form, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { User } from 'react-feather';
import InputSearch from '../InputSearch/InputSearch';
import UiStore from '../../stores/ui-store';
import UserStore from '../../stores/user-store';
import Logo from '../../media/images/logo.svg';

import './header.scss';

const Header: React.FC = () => (
  <Navbar
    className="justify-content-between align-items-center header"
    bg="light"
    variant="light"
  >
    <NavLink to="/">
      <Navbar.Brand>
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
    </NavLink>
    <Form inline>
      <InputSearch />
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
      <p className="mb-0">
        {`${UserStore.userInfo.name} (${UserStore.userInfo.login})`}
        <User className="ml-1" color="blue" size={16} />
      </p>
      <Button onClick={() => UserStore.logout()} variant="primary">
        Sign out
      </Button>
    </div>
  </Navbar>
);
export default observer(Header);
