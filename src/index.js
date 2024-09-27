import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en"; // Aca puedes cambiar a la version en Ingles!
import {FormattedMessage,IntlProvider} from 'react-intl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <IntlProvider locale="es-ES" messages= {localeEsMessages}>
    <App />
  </IntlProvider>

);