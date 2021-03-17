import { autorun, makeAutoObservable } from 'mobx';

import request from '../api/api';
import { CountryType } from './country';
import UiStore from './ui-store';

class CountryStore {
  isLoading = false;

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
    } catch (error) {
      // console.log(error);
    } finally {
      this.isLoading = false;
    }
  }
}

export default new CountryStore();
