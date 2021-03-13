import { makeAutoObservable } from 'mobx';

import request from '../api/api';

export type CountryType = {
  _id: string;
  capital: string;
  description: string;
  image: string;
  name: string;
  stars: string;
  feedback: Record<string, unknown>[];
};

export class Country {
  isLoading = false;

  data: CountryType | undefined;

  constructor(id: string) {
    makeAutoObservable(this);
    this.load(id);
  }

  async load(id: string): Promise<void> {
    try {
      this.isLoading = true;
      this.data = await request<CountryType>(`countries/${id}`, 'GET');
    } finally {
      this.isLoading = false;
    }
  }
}
