import { createContext, useReducer } from 'react'
import { CartReducer, CartInitialState} from '../reducers/CartReducer.jsx'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(CartReducer, CartInitialState)

  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  const handleRemoveFromCart = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  }) 

  const handleClearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  const handleSumProduct = (product) => dispatch({
    type: 'SUM_PRODUCT',
    payload: product
  }) 

  const handleMinProduct = (product) => dispatch({
    type: 'MIN_PRODUCT',
    payload: product
  })

  return { state, handleAddToCart, handleRemoveFromCart, handleClearCart, handleSumProduct, handleMinProduct}
}


export default function CartProvider({ children }) {
 
  const { state, handleAddToCart, handleRemoveFromCart, handleClearCart, handleSumProduct, handleMinProduct } = useCartReducer()

  return (
    <CartContext.Provider
    value={{
      cart: state.cart,
      count: state.count,
      total: state.total,
      handleAddToCart,
      handleRemoveFromCart,
      handleClearCart,
      handleSumProduct,
      handleMinProduct
    }}
  >
    {children}
  </CartContext.Provider>
  )
}
