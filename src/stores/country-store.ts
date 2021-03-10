import { makeAutoObservable } from 'mobx';

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

  loadCountries() {
    this.countries = [
      {
        name: 'CountryPage 1',
        note: 'Note',
        photo: 'Photo',
        video: '',
        map: '',
      },
      {
        name: 'CountryPage 2',
        note: 'Note',
        photo: 'Photo',
        video: '',
        map: '',
      },
    ];
  }
}

export default new CountryStore();
