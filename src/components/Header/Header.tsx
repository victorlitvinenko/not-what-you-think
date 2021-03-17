import { observer } from 'mobx-react-lite';
import { Button, Form, Navbar } from 'react-bootstrap';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

import { User } from 'react-feather';
import InputSearch from '../InputSearch/InputSearch';
import UserStore from '../../stores/user-store';
import UiStore from '../../stores/ui-store';
import translations from '../../libs/translations';
import Logo from '../../media/images/logo.svg';

import './header.scss';

type RouterProps = {
  pathname: string;
};

const Header: React.FC<RouteComponentProps<RouterProps>> = ({ history }) => {
  const t = translations[UiStore.language];
  return (
    <Navbar className="header_box" bg="light" variant="light">
      <div className="header_left">
        <NavLink to="/">
          <Navbar.Brand>
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
        </NavLink>
        <Form inline>
          <Form.Group
            className="select_language"
            controlId="exampleForm.SelectCustomSizeSm"
          >
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
          {history.location.pathname !== '/' ? null : <InputSearch />}
        </Form>
      </div>
      <div className="header_right">
        <p className="mb-0">
          {`${UserStore.userInfo.name} (${UserStore.userInfo.login})`}
          <User className="ml-1" color="blue" size={16} />
        </p>
        <Button
          className="nowrap"
          onClick={() => UserStore.logout()}
          variant="primary"
        >
          {t.signOut}
        </Button>
      </div>
    </Navbar>
  );
};
export default withRouter(observer(Header));
