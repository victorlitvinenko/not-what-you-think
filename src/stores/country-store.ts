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

  filterCountries(searchTerm: string) {
    this.countries.forEach((country) => {
      if (
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        Object.assign(country, { className: '' });
      } else Object.assign(country, { className: 'd-none' });
    });
  }
}

export default new CountryStore();
