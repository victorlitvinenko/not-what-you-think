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
    this.token =
      localStorage.getItem('token') || sessionStorage.getItem('token') || '';
    makeAutoObservable(this);
  }

  async login(login: string, password: string, remember = true) {
    try {
      this.isLoading = true;
      // let token: string =
      //   localStorage.getItem('token') || sessionStorage.getItem('token') || '';
      if (!this.token && login && password) {
        this.token = (
          await request<Record<string, string>>('login', 'POST', {
            login,
            password,
          })
        )?.token;
        if (this.token) {
          this.userInfo = {
            login: jwt.decode(this.token).login,
            name: jwt.decode(this.token).name,
          };
          if (remember) {
            localStorage.setItem('token', this.token);
            localStorage.setItem('user', JSON.stringify(this.userInfo));
          } else {
            sessionStorage.setItem('token', this.token);
            sessionStorage.setItem('user', JSON.stringify(this.userInfo));
          }
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
