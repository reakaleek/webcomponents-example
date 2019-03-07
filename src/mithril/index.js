import m from 'mithril'

const items = [
  'Dorotea',
  'Laverna',
  'Wava',
  'Erline',
  'Tari',
  'Candace',
  'Elena',
  'Daphine',
  'Naoma',
]

const oncreate = ({ dom: element }) => {
  element.addEventListener('awesome', ev => {
    console.log('%cmithril:', 'color: #ff3860', ev.target.value)
  })
}

const hyperappWebComponent = m('hyperapp-autocomplete', { items, oncreate })

const app = m('div', { class: 'notification is-danger' }, [
  m('h2', { class: 'title' }, 'Mithril'),
  hyperappWebComponent,
])

m.render(document.getElementById('mithril-app'), app)
