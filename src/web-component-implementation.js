import './web-component-estilos.css';
import template from './web-component-template.html';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('testing');
    app.innerHTML = template;
  });