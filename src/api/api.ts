import UiStore from '../stores/ui-store';

const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  // window.location.reload();
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
  try {
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
  } catch (err) {
    throw new Error(err);
  }
};

export default request;
