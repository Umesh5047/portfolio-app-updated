import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  const { user, logout } = useAuth()
  const nav = useNavigate()
  const onLogout = ()=> { logout(); nav('/login') }
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold text-primary">MyPortfolio</Link>
        <nav className="flex items-center gap-4">
          <Link to="/projects" className="hover:text-accent">Projects</Link>
          <Link to="/portfolio" className="hover:text-accent">Portfolio</Link>
          {!user && <Link to="/login" className="hover:text-accent">Login</Link>}
          {!user && <Link to="/signup" className="px-3 py-1 rounded bg-accent text-white">Sign up</Link>}
          {user && <div className="flex items-center gap-3"><span>{user.name}</span><button onClick={onLogout} className="px-3 py-1 bg-primary text-white rounded">Logout</button></div>}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
