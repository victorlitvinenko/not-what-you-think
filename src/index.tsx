import './i18n';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css';

const renderApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(renderApp(), document.getElementById('root'));
