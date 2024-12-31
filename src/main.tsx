import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_me" element={<About />} />
      <Route path="/contact_me" element={<Contact />} />
      {/* <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route> */}
    </Routes>
  </Router>
  </StrictMode>,
)
