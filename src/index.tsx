import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import * as serviceWorker from './serviceWorker';

const KEY_NAME = 'dark-theme';
const App = React.lazy(() => import('./App'));

const toggleDarkTheme = (_init?: boolean) => {
  const storge: boolean = window.sessionStorage.getItem(KEY_NAME) === 'true' ? true : false;
  let theme = String(_init ? storge : !storge);
  window.sessionStorage.setItem(KEY_NAME, theme);
  document.documentElement.setAttribute(KEY_NAME, theme);
};

toggleDarkTheme(true);

ReactDOM.render(
  <React.Suspense fallback={null}>
    <App setDark={toggleDarkTheme} />
  </React.Suspense>,
  document.getElementById('root')
);
serviceWorker.register();
