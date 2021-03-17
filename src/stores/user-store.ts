import { autorun, makeAutoObservable } from 'mobx';
import jwt from 'jsonwebtoken';
import request from '../api/api';
import UiStore from './ui-store';

class UserStore {
  token = '';

  userInfo: Record<string, string> = {
    login: '',
    name: '',
  };

  profile: Record<string, string> = {};

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.token =
      localStorage.getItem('token') || sessionStorage.getItem('token') || '';
    autorun(() => {
      if (this.token) {
        this.userInfo = {
          login: jwt.decode(this.token).login,
          name: jwt.decode(this.token).name,
        };
      }
    });
  }

  async login(login: string, password: string, remember = true) {
    try {
      this.isLoading = true;
      if (!this.token && login && password) {
        const result = (
          await request<Record<string, string>>('login', 'POST', {
            login,
            password,
          })
        )?.token;
        if (result) {
          if (remember) {
            localStorage.setItem('token', result);
          } else {
            sessionStorage.setItem('token', result);
          }
          this.token = result;
        }
      }
    } catch (error) {
      UiStore.showNotification('Wrong login or password');
    } finally {
      this.isLoading = false;
    }
  }

  async register(login: string, password: string, name: string) {
    try {
      this.isLoading = true;
      let newUser = '';
      try {
        newUser = await request('user', 'POST', {
          login,
          password,
          name,
        });
        if (newUser) {
          this.login(login, password);
        }
      } catch (error) {
        UiStore.showNotification(`User with login: ${login} already exists`);
      }
    } finally {
      this.isLoading = false;
    }
  }

  logout() {
    this.token = '';
    this.profile = {};
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
}

export default new UserStore();
