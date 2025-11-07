import DesignNavbar from './components/DesignNavbar'
import PalettePreview from './components/PalettePreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF9FB', color: '#2D3748' }}>
      <DesignNavbar />
      <main>
        <PalettePreview />
      </main>
      <Footer />
    </div>
  )
}

export default App
