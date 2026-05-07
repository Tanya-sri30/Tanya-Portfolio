import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import { routePaths } from './routePaths.js'

function AppRoutes() {
  return (
    <Routes>
      <Route path={routePaths.home} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
