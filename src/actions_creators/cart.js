export const ADD_TO_CART = (product) => (
  {
    type: 'ADD_TO_CART',
    product
  }
)

export const REMOVE_TO_CART = (product_id) => (
  {
    type: 'REMOVE_TO_CART',
    product_id
  }
)
