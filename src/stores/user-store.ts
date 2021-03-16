import { makeAutoObservable } from 'mobx';
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
  }

  async login(login: string, password: string, remember = true) {
    try {
      this.isLoading = true;
      let token: string =
        localStorage.getItem('token') || sessionStorage.getItem('token') || '';
      if (!token && login && password) {
        token = (
          await request<Record<string, string>>('login', 'POST', {
            login,
            password,
          })
        )?.token;
        if (token) {
          this.userInfo = {
            login: jwt.decode(token).login,
            name: jwt.decode(token).name,
          };
          if (remember) {
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(this.userInfo));
          } else {
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(this.userInfo));
          }
        }
        window.location.reload();
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
          window.location.reload();
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
    window.location.reload();
  }
}

export default new UserStore();
