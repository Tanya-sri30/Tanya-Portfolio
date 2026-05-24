import AmbientBackground from '../components/background/AmbientBackground.jsx'
import CustomCursor from '../components/interactions/CustomCursor.jsx'
import Navbar from '../components/Navbar.jsx'
import { cn } from '../utils/cn.js'

function MainLayout({ children, className = '' }) {
  return (
    <main
      className={cn(
        'min-h-screen overflow-x-hidden bg-[color:var(--color-background)] text-[color:var(--color-text-primary)] antialiased',
        'selection:bg-[rgba(125,211,252,0.22)] selection:text-[color:var(--color-text-primary)]',
        className,
      )}
    >
      <AmbientBackground />
      <CustomCursor />
      <Navbar />
      <div className="relative z-10">{children}</div>
    </main>
  )
}

export default MainLayout
