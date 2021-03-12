import { makeAutoObservable } from 'mobx';

class UiStore {
  notification: string | null = null;

  language = 'ru';

  constructor() {
    makeAutoObservable(this);
  }

  get isShowNotification() {
    return !!this.notification;
  }

  showNotification(notification: string) {
    this.notification = notification;
  }

  clearNotification() {
    this.notification = null;
  }

  setLanguage(language: string) {
    this.language = language;
  }
}

export default new UiStore();
