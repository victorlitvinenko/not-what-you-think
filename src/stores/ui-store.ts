import { makeAutoObservable } from 'mobx';

class UiStore {
  warning: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  showWarning(warning: string) {
    this.warning = warning;
  }

  clearWarning() {
    this.warning = null;
  }
}

export default new UiStore();
