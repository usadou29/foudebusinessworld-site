import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PaysDubai from './pages/PaysDubai'
import PaysHongKong from './pages/PaysHongKong'
import PaysGeorgie from './pages/PaysGeorgie'
import ServiceCreationSociete from './pages/services/ServiceCreationSociete'
import ServiceSourcingChine from './pages/services/ServiceSourcingChine'
import ServiceEcommerce from './pages/services/ServiceEcommerce'
import ServiceClub from './pages/services/ServiceClub'
import ServiceCantonFair from './pages/services/ServiceCantonFair'

function App() {
  return (
    <div className="min-h-screen bg-light-pattern">
      <Header />
      <main>
        <Routes>
          {/* French Routes */}
          <Route path="/fr" element={<Home />} />
          <Route path="/fr/a-propos" element={<About />} />
          <Route path="/fr/contact" element={<Contact />} />
          
          {/* Pays Routes */}
          <Route path="/fr/pays/dubai" element={<PaysDubai />} />
          <Route path="/fr/pays/hong-kong" element={<PaysHongKong />} />
          <Route path="/fr/pays/georgie" element={<PaysGeorgie />} />
          
          {/* Services Routes */}
          <Route path="/fr/services/creation-societe" element={<ServiceCreationSociete />} />
          <Route path="/fr/services/sourcing-chine" element={<ServiceSourcingChine />} />
          <Route path="/fr/services/ecommerce" element={<ServiceEcommerce />} />
          <Route path="/fr/services/club" element={<ServiceClub />} />
          <Route path="/fr/services/canton-fair" element={<ServiceCantonFair />} />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/fr" replace />} />
          <Route path="*" element={<Navigate to="/fr" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
