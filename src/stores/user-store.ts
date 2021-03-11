import { makeAutoObservable } from 'mobx';
import request from '../api/api';
import uiStore from './ui-store';

class UserStore {
  token = '';

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
        try {
          token = (
            await request<Record<string, string>>('login', 'POST', {
              login,
              password,
            })
          )?.token;
          if (token) {
            if (remember) {
              localStorage.setItem('token', token);
            } else {
              sessionStorage.setItem('token', token);
            }
          }
          window.location.reload();
        } catch (error) {
          // console.log(error);
        }
      }
      if (token) {
        this.token = token;
        try {
          const profile = await request<Record<string, string>>(
            '/users/profile',
            'GET',
            null,
            {
              Authorization: `Bearer ${token}`,
            }
          );
          if (profile) {
            this.profile = profile;
          }
        } catch (error) {
          uiStore.showNotification('Not valid login or password');
        }
      }
    } catch {
      // console.log('error');
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
        // console.log(error);
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
