import { h, app } from 'hyperapp'
import AutoComplete from './AutoComplete'

const includesIgnoreCase = (text, searchText) =>
  text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())

export const initState = () => ({
  text: '',
  isActive: false,
  items: [],
  shownItems: [],
  selectedItemIndex: 0,
})

export const initActions = webcomponent => ({
  init: items => ({ items, shownItems: items }),
  setText: text => ({ items }) => {
    webcomponent.value = text
    const shownItems = text.length
      ? items.filter(i => includesIgnoreCase(i, text))
      : items
    return {
      text,
      isActive: shownItems.length,
      shownItems,
      selectedItemIndex: 0,
    }
  },
  setActive: isActive => ({ shownItems }) => ({
    isActive: isActive ? shownItems.length : isActive,
  }),
  dispatchEvent: () => ({ text }) => {
    if (text) {
      webcomponent.dispatchEvent(new Event('awesome'))
    }
    return { isActive: false }
  },
  selectUp: () => ({ selectedItemIndex }) => ({
    selectedItemIndex: selectedItemIndex > 0 ? selectedItemIndex - 1 : 0,
  }),
  selectDown: () => ({ selectedItemIndex, shownItems }) => ({
    selectedItemIndex:
      selectedItemIndex < shownItems.length - 1
        ? selectedItemIndex + 1
        : shownItems.length - 1,
  }),
  setSelected: () => (
    { shownItems, selectedItemIndex },
    { setText, setActive },
  ) => {
    setText(shownItems[selectedItemIndex])
    setActive(false)
  },
})

export const initView = () => <AutoComplete />

export const render = mountPoint => webcomponent =>
  app(initState(), initActions(webcomponent), initView(), mountPoint)
