import { h } from 'hyperapp'
import AutomCompleteDropdownList from './AutoCompleteDropdownList'
import AutoCompleteInputField from './AutoCompleteInputField'
import cn from 'classnames'

const AutoComplete = () => ({ isActive }) => (
  <div className={cn('dropdown', { 'is-active': isActive })}>
    <AutoCompleteInputField />
    <AutomCompleteDropdownList />
  </div>
)

export default AutoComplete
