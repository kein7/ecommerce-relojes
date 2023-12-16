export const CartInitialState = {
  cart: JSON.parse(window.localStorage.getItem('cart')),
  count: JSON.parse(window.localStorage.getItem('count')),
  total: JSON.parse(window.localStorage.getItem('total'))
} || { cart: [], count: 0, total: 0 }

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  SUM_PRODUCT: 'SUM_PRODUCT',
  MIN_PRODUCT: 'MIN_PRODUCT',
  UPDATE_COUNT: 'UPDATE_COUNT'
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state.cart))
  window.localStorage.setItem('count', JSON.stringify(state.count))
  window.localStorage.setItem('total', JSON.stringify(state.total))
}

export const CartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id, quantity, price } = actionPayload
      const productInCartIndex = state.cart.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        /*
        const cartState = structuredClone(state.cart)
        cartState[productInCartIndex].quantity += 1
        */

        const cartState =  [
          ...state.cart.slice(0, productInCartIndex),
          {...state.cart[productInCartIndex], quantity: state.cart[productInCartIndex].quantity + 1},
          ...state.cart.slice(productInCartIndex + 1)
        ]

        const newState = {
          cart: cartState,
          count: state.count + quantity,
          total: state.total + price * quantity
        }

        updateLocalStorage(newState)

        return newState
      }

      const newState = {
        cart: [...state.cart, { ...actionPayload, quantity: 1 }],
        count: state.count + quantity,
        total: state.total + price * quantity
      }

      updateLocalStorage(newState)

      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id, price, quantity } = actionPayload
      const cartState = state.cart.filter((item) => item.id !== id)
      const newState = {
        cart: cartState,
        count: state.count - quantity,
        total: state.total - price * quantity
      }
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage( { cart: [], count: 0, total: 0 })
      return  { cart: [], count: 0, total: 0 }
    }

    case CART_ACTION_TYPES.SUM_PRODUCT: {
      const { id, price } = actionPayload
      if (state.cart.find((item) => item.id === id)) {
        const cartState = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        const newState = {
          cart: cartState,
          count: state.count + 1,
          total: state.total + price * 1
        }
        updateLocalStorage(newState)
        return newState
      }
    }

    case CART_ACTION_TYPES.MIN_PRODUCT: {
      const { id, price } = actionPayload
      let cartState = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )

      const newState = {
        cart: cartState,
        count: state.count - 1,
        total: state.total - price * 1
      }
      updateLocalStorage(newState)
      return newState
    }
  }
}
