import { h } from 'hyperapp'
import cn from 'classnames'

const AutoCompleteItem = ({ value, isSelected }) => (
  _,
  { setText, setActive },
) => (
  <a
    className={cn('dropdown-item', { 'is-active': isSelected })}
    onmousedown={() => {
      setText(value)
      setActive(false)
    }}
  >
    {value}
  </a>
)

export default AutoCompleteItem
