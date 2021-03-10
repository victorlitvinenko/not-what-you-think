import { useState } from 'react';
import userStore from '../../stores/user-store';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './loging-form.module.scss';

const LogingForm: React.FC = () => {
  const [state, setState] = useState({
    login: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(true);

  const onSubmit = () => {
    userStore.login(state.login, state.password);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__container}>
        <h1>{isRegistered ? 'Sign in' : 'Registration'}</h1>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, login: e.target.value })
          }
          className="input"
          type="text"
          placeholder="Login"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, password: e.target.value })
          }
          className="input"
          type="password"
          placeholder="Password"
        />
        <Button type="primary" onSubmit={onSubmit} text="Submit" />
        <p className={styles.description}>
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
