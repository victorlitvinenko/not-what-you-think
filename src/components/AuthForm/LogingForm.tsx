import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UserStore from '../../stores/user-store';
import styles from './loging-form.module.scss';

const LogingForm: React.FC = () => {
  const [state, setState] = useState({
    login: '',
    password: '',
    name: '',
  });
  const [isRegistered, setIsRegistered] = useState(true);

  const onSubmit = () => {
    if (isRegistered) UserStore.login(state.login, state.password);
    else UserStore.register(state.login, state.password, state.name);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__container}>
        <h2>{isRegistered ? 'Sign in' : 'Registration'}</h2>
        <Form>
          {!isRegistered ? (
            <Form.Group controlId="formBasicLogin">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setState({ ...state, name: e.target.value })}
                type="name"
                placeholder="Enter name"
              />
            </Form.Group>
          ) : null}
          <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              onChange={(e) => setState({ ...state, login: e.target.value })}
              type="login"
              placeholder="Enter login"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setState({ ...state, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save credentials" />
          </Form.Group>
          <Button onClick={onSubmit} variant="primary">
            Submit
          </Button>
        </Form>
        <p className={`${styles.description} mt-2`}>
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

export default LogingForm;
