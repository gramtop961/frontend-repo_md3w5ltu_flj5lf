import React from 'react'
import DesignNavbar from './DesignNavbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFF9FB', color: '#2D3748' }}>
      <DesignNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
