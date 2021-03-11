import { makeAutoObservable } from 'mobx';
import request from '../api/api';

type CountryType = {
  name: string;
  note: string;
  photo: string;
  video: string;
  map: string;
};

class CountryStore {
  isLoading = false;

  countries: CountryType[] = [];

  constructor() {
    this.loadCountries();
    makeAutoObservable(this);
  }

  async loadCountries() {
    try {
      this.countries = await request('countries', 'GET');
    } catch (error) {
      // console.log(error);
    }
  }
}

export default new CountryStore();
