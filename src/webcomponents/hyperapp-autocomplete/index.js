import { render } from './app.js'
const bulma = require('bulma/css/bulma.css').toString()
const css = require('./style.css').toString()

class WebComponent extends HTMLElement {
  get items() {
    const items = this.getAttribute('items')
    try {
      return JSON.parse(items)
    } catch (e) {
      return items.split(',')
    }
  }

  set items(items) {
    this.setAttribute('items', items)
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    let style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `${bulma} ${css}`
    this.shadowRoot.appendChild(style)

    const mountPoint = document.createElement('div')
    this.shadowRoot.appendChild(mountPoint)

    const main = render(mountPoint)(this)
    main.init(this.items)
  }
}
customElements.define('hyperapp-autocomplete', WebComponent)
