import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/NavBar'
import Feed from './components/Feed'
import ProductPage from './components/ProductPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        
        <Feed></Feed>
        <Routes>
          <Route path="/product" element={<ProductPage></ProductPage>} />
        </Routes>
      </Router>
    </div>
  )
}
