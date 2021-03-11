import { makeAutoObservable } from 'mobx';

class UiStore {
  notification: string | null = null;

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
}

export default new UiStore();
