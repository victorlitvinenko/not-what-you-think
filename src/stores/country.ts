import { autorun, makeAutoObservable } from 'mobx';

import request from '../api/api';
import UiStore from './ui-store';

export type CountryType = {
  _id: string;
  capital: string;
  description: string;
  image: string;
  name: string;
  stars: string;
  feedback: Record<string, string>[];
  timeZone: Record<string, string> | undefined;
  video: string;
  attractions: Record<string, string>[];
  capitalLon: number;
  capitalLat: number;
  className: string;
  currency: string;
};

export class Country {
  isLoading = false;

  data: CountryType | undefined;

  constructor(id: string) {
    makeAutoObservable(this);
    // this.load(id, UiStore.language);
    autorun(() => {
      this.load(id, UiStore.language);
    });
  }

  async load(id: string, language: string): Promise<void> {
    try {
      this.isLoading = true;
      this.data = await request<CountryType>(
        `countries/${id}/${language}`,
        'GET'
      );
    } finally {
      this.isLoading = false;
    }
  }
}
