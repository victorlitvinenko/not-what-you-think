import UiStore from '../stores/ui-store';

const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  // eslint-disable-next-line no-restricted-globals
  // location.reload();
};

const getAccessToken = (): string | null => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  return token || null;
};

const request = async <T>(
  url: string,
  method = 'GET',
  initialBody?: unknown,
  initialHeaders = {}
): Promise<T> => {
  let body = null;
  let headers = initialHeaders;
  const token = getAccessToken();
  if (token) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }
  if (initialBody) {
    body = JSON.stringify(initialBody);
    headers = { ...headers, 'Content-Type': 'application/json' };
  }
  const response = await fetch(
    `https://travel-app-react.herokuapp.com/${url}`,
    {
      method,
      body,
      headers,
    }
  );
  if (response.status === 401) {
    logout();
  }
  const data = await response.json();

  if (!response.ok) {
    UiStore.showNotification(data.error);
    throw new Error(response.statusText);
  }
  return data;
};

export default request;
