import template from './web-component-template.html';

class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = template;
    
    shadow.appendChild(wrapper);
  }
}

customElements.define('wc-prueba', MyComponent);