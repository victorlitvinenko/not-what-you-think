import { autorun, makeAutoObservable } from 'mobx';

import request from '../api/api';
import { CountryType } from './country';
import UiStore from './ui-store';

class CountryStore {
  isLoading = true;

  countries: CountryType[] = [];

  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.loadCountries(UiStore.language);
    });
  }

  async loadCountries(language: string) {
    try {
      this.isLoading = true;
      this.countries = await request(`countries/${language}`, 'GET');
      this.isLoading = false;
    } catch (error) {
      // console.log(error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default new CountryStore();
