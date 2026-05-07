import Navbar from '../components/Navbar.jsx'
import { cn } from '../utils/cn.js'

function MainLayout({ children, className = '' }) {
  return (
    <main
      className={cn(
        'min-h-screen overflow-x-hidden bg-[#09090f] text-[#f7f7fb] antialiased',
        'selection:bg-cyan-300/30 selection:text-white',
        className,
      )}
    >
      <Navbar />
      {children}
    </main>
  )
}

export default MainLayout
