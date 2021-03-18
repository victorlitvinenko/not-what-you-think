import { makeAutoObservable } from 'mobx';

import UserStore from './user-store';
import CountryStore from './country-store';
import UiStore from './ui-store';

class RootStore {
  UserStore = UserStore;

  CountryStore = CountryStore;

  UiStore = UiStore;

  constructor() {
    makeAutoObservable(this);
  }

  async login(login: string, password: string, remember = true): Promise<void> {
    await this.UserStore.login(login, password, remember);
    if (this.UserStore.token) {
      await this.CountryStore.loadCountries(this.UiStore.language);
    }
  }

  async register(login: string, password: string, name: string) {
    await this.UserStore.register(login, password, name);
  }
}

export default new RootStore();
