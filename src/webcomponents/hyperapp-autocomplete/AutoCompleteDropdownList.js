import { h } from 'hyperapp'
import AutoCompleteItem from './AutoCompleteItem'

const AutomCompleteDropdownList = () => ({ shownItems, selectedItemIndex }) => (
  <div className="dropdown-menu">
    <div className="dropdown-content">
      {shownItems.map((item, index) => (
        <AutoCompleteItem
          value={item}
          isSelected={index === selectedItemIndex}
        />
      ))}
    </div>
  </div>
)

export default AutomCompleteDropdownList
