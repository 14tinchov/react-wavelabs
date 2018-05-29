import { createStore } from 'redux'

const products = [
  {id: 1, name: "Auto lujoso", img: "https://loremflickr.com/320/240/racecar?random=1"},
  {id: 2, name: "Auto lujoso 2", img: "https://loremflickr.com/320/240/racecar?random=2"},
  {id: 3, name: "Auto lujoso 3", img: "https://loremflickr.com/320/240/racecar?random=3"}
]

function reducer(state = {}, action) {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: state.cart.concat(action.product)
    }
  } else if (action.type === 'REMOVE_TO_CART'){
    return {
      ...state,
      cart: state.cart.filter((product) => action.product_id !== product.id)
    }
  }
  return state
}

let store = createStore(reducer, {products: products, cart: []})

export default store