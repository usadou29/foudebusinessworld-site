import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RequireAuth from './components/auth/RequireAuth';

import Home from './pages/Home';
import LanguageLayout from './components/LanguageLayout';
import MainLayout from './components/layout/MainLayout';
import WhyUs from './pages/WhyUs';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Formations from './pages/Formations';
import Blog from './pages/Blog';
import AppelStrategique from './pages/AppelStrategique';

// Pays
import CountryHub from './pages/countries/CountryHub';
import CountryDetail from './pages/countries/CountryDetail';

// Service Pages
import ServiceCreationSociete from './pages/services/ServiceCreationSociete';
import ServiceSourcingChine from './pages/services/ServiceSourcingChine';
import ServiceCantonFair from './pages/services/ServiceCantonFair';
import ServiceEcommerce from './pages/services/ServiceEcommerce';
import ServiceClub from './pages/services/ServiceClub';

// Auth & Dashboard
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';

// Courses
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import LessonViewer from './pages/LessonViewer';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl text-brand-gold font-serif mb-4">{title}</h1>
    <p className="text-gray-400">Content coming soon.</p>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Redirection FR par défaut */}
          <Route path="/" element={<Navigate to="/fr" replace />} />

          {/* Routes avec /:lang */}
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              
              {/* Services */}
              <Route path="services" element={<Services />} />
              <Route path="services/creation-societe" element={<ServiceCreationSociete />} />
              <Route path="services/sourcing-chine" element={<ServiceSourcingChine />} />
              <Route path="services/canton-fair" element={<ServiceCantonFair />} />
              <Route path="services/ecommerce" element={<ServiceEcommerce />} />
              <Route path="services/club" element={<ServiceClub />} />
              
              {/* Pays */}
              <Route path="pays" element={<CountryHub />} />
              <Route path="pays/dubai" element={<CountryDetail country="dubai" />} />
              <Route path="pays/hong-kong" element={<CountryDetail country="hong-kong" />} />
              <Route path="pays/georgie" element={<CountryDetail country="georgie" />} />
              
              {/* Legacy countries routes */}
              <Route path="countries" element={<CountryHub />} />
              <Route path="countries/:slug" element={<CountryDetail />} />
              
              {/* Autres */}
              <Route path="formations" element={<Formations />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="appel" element={<AppelStrategique />} />
              
              {/* Legacy routes */}
              <Route path="why-us" element={<WhyUs />} />
              <Route path="about" element={<About />} />
              <Route path="programs" element={<Programs />} />
              <Route path="resources" element={<PlaceholderPage title="Resources & Blog" />} />

              {/* Auth Routes */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              {/* Course Routes */}
              <Route path="courses" element={<Courses />} />
              <Route path="courses/:slug" element={<CourseDetail />} />
            </Route>

            {/* Protected Lesson Viewer */}
            <Route path="courses/:slug/lessons/:lessonId" element={
              <RequireAuth>
                <LessonViewer />
              </RequireAuth>
            } />

            {/* Protected Dashboard Routes */}
            <Route path="dashboard" element={
              <RequireAuth>
                <DashboardLayout />
              </RequireAuth>
            }>
              <Route index element={<DashboardHome />} />
              <Route path="courses" element={<PlaceholderPage title="My Courses" />} />
              <Route path="settings" element={<PlaceholderPage title="Settings" />} />
            </Route>

            {/* Catch all for 404 inside layout */}
            <Route path="*" element={
              <div className="flex items-center justify-center py-40 min-h-[50vh] bg-black">
                <h1 className="text-2xl text-white">404 - Page Not Found</h1>
              </div>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
