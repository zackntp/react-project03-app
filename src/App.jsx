import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './views/LoginPage'
import HomePage from './views/HomePage'
import AboutPage from './views/AboutPage'
import ContactPage from './views/ContactPage'
import RegisterPage from './views/RegisterPage'


function App() {
  

  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/wow/contact" element={<ContactPage />} />
      <Route path="/sau/dti/regis" element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
