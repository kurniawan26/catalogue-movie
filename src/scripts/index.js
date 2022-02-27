import 'regenerator-runtime';
import '../styles/styles.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegiter from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegiter();
});
