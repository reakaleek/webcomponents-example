import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

const items = [
  'Martie',
  'Orazio',
  'Mikkel',
  'Maynard',
  'Ezekiel',
  'Andre',
  'Thibaut',
  'Alasdair',
  'Gregoire',
]

const App = () => {
  const ref = useRef(null)
  useEffect(() => {
    const { current: element } = ref
    element.addEventListener('awesome', ev => {
      console.log('%creact:', 'color: #3273dc', ev.target.value)
    })
  })
  return (
    <div className="notification is-link">
      <h2 className="title">React</h2>
      <hyperapp-autocomplete ref={ref} items={items} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-app'))
