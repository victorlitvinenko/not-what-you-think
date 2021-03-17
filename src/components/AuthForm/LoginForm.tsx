/* eslint-disable no-console */
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

import UserStore from '../../stores/user-store';
import RootStore from '../../stores/root-store';

import styles from './loging-form.module.scss';

const LoginForm: React.FC = () => {
  const [state, setState] = useState({
    login: '',
    password: '',
    name: '',
    remember: true,
  });
  const [isRegistered, setIsRegistered] = useState(true);

  const onSubmit = () => {
    if (isRegistered)
      RootStore.login(state.login, state.password, state.remember);
    else RootStore.register(state.login, state.password, state.name);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__container}>
        <h2>{isRegistered ? 'Sign in' : 'Registration'}</h2>
        <Form className="w-100">
          {!isRegistered ? (
            <Form.Group controlId="formBasicLogin">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setState({ ...state, name: e.target.value })}
                value={state.name}
                type="name"
                placeholder="Enter name"
              />
            </Form.Group>
          ) : null}
          <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              onChange={(e) => setState({ ...state, login: e.target.value })}
              value={state.login}
              type="login"
              placeholder="Enter login"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setState({ ...state, password: e.target.value })}
              value={state.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              onChange={() => setState({ ...state, remember: !state.remember })}
              checked={state.remember}
              type="checkbox"
              label="Save credentials"
            />
          </Form.Group>
          <Button
            onClick={onSubmit}
            variant="primary"
            disabled={UserStore.isLoading}
          >
            {UserStore.isLoading && <Spinner animation="border" size="sm" />}{' '}
            Submit
          </Button>
        </Form>
        <p className={`${styles.description} mt-4 mb-0`}>
          If you are {isRegistered ? 'not registered' : 'alredy have account'}{' '}
          <span
            onKeyDown={() => null}
            tabIndex={0}
            role="button"
            onClick={() => setIsRegistered(!isRegistered)}
          >
            click here
          </span>
        </p>
      </div>
      <div className="ripple-background">
        <div className="circle xxlarge shade1" />
        <div className="circle xlarge shade2" />
        <div className="circle large shade3" />
        <div className="circle mediun shade4" />
        <div className="circle small shade5" />
      </div>
    </div>
  );
};

export default observer(LoginForm);
