import { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [countProducts, setCountProducts] = useState(0)
  const [total, setTotal] = useState(0)

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      setTotal(total + product.price * product.quantity)
      setCountProducts(countProducts + product.quantity)
      return setCart(newCart)
    }
    setTotal(total + product.price * product.quantity)
    setCountProducts(countProducts + product.quantity)
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const clearCart = () => {
    setCart([])
    setTotal(0)
    setCountProducts(0)
  }

  const deleteProduct = (product) => {
    const results = cart.filter((item) => item.id !== product.id)

    setTotal(total - product.price * product.quantity)
    setCountProducts(countProducts - product.quantity)
    setCart(results)
  }

  const sumProduct = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      const products = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1,  } : item
      )
      console.log(products)
      setTotal(total + product.price * 1)
      setCountProducts(countProducts + 1)
      return setCart([...products])
    }
  }

  const minProduct = (product) => {
    let products = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    )
    
    setTotal(total - product.price * 1)
    setCountProducts(countProducts - 1)

    return setCart(products)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        countProducts,
        total,
        addToCart,
        clearCart,
        deleteProduct,
        sumProduct,
        minProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
