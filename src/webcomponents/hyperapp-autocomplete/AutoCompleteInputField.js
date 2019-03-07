import { h } from 'hyperapp'

const handleKeypress = (
  { keyCode, target },
  selectUp,
  selectDown,
  setSelected,
) => {
  switch (keyCode) {
    case 13:
      setSelected()
      target.blur()
      break
    case 38:
      selectUp()
      break
    case 40:
      selectDown()
      break
  }
}

const AutoCompleteInputField = () => (
  { text },
  { setText, dispatchEvent, setActive, selectUp, selectDown, setSelected },
) => (
  <div className="field has-addons">
    <div class="control">
      <a class="button is-static">Search:</a>
    </div>
    <div className="control is-expanded">
      <input
        className="input is-fullwidth"
        value={text}
        placeholder="Start typing..."
        onkeydown={ev => handleKeypress(ev, selectUp, selectDown, setSelected)}
        oninput={ev => setText(ev.target.value)}
        onfocus={() => setActive(true)}
        onblur={dispatchEvent}
      />
    </div>
  </div>
)

export default AutoCompleteInputField
