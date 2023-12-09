import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/Header/NavBar'
import Feed from './components/Index/Feed'
import ProductPage from './components/Products/ProductPage'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import UserPage from './components/Users/UserPage'
import WishList from './components/WishList'
import Register from './components/Users/Register'
import Login from './components/Users/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

export default function App() {
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  return (
    <div>
      <Router>
        <NavBar
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        ></NavBar>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route
            path="/product/:id"
            element={
              <ProductPage
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          ></Route>
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          ></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path="/user/index" Component={UserPage}></Route>
          <Route path="/wishlist" Component={WishList}></Route>
        </Routes>
      </Router>
    </div>
  )
}
