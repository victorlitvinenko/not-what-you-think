import { makeAutoObservable } from 'mobx';
import request from '../api/api';

export type CountryType = {
  capital: string;
  description: string;
  image: string;
  name: string;
  stars: string;
  feedback: Record<string, unknown>[];
  _id: string;
};

class CountryStore {
  isLoading = true;

  countries: CountryType[] = [];

  constructor() {
    this.loadCountries();
    makeAutoObservable(this);
  }

  async loadCountries() {
    try {
      this.countries = await request('countries', 'GET');
      this.isLoading = false;
    } catch (error) {
      // console.log(error);
    }
  }
}

export default new CountryStore();
