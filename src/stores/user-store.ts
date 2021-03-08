import { makeAutoObservable } from 'mobx';
import request from '../api/api';

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
            await request<Record<string, string>>('/login', 'POST', {
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
        } catch (error) {
          console.log(error);
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
          console.log(error);
        }
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
