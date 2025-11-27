import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Header(){
  const { user, logout } = useContext(AuthContext)

  return (
    <header>
      <div className="container" style={{display:'flex', gap:20, alignItems:'center'}}>
        <Link to={user ? "/dashboard" : "/"} style={{ fontWeight: 700, color: 'white' }}>GameSetup</Link>
        <nav style={{ marginLeft: 20, display:'flex', gap:12 }}>
          {user && <Link to="/dashboard">Dashboard</Link>}
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          {user ? (
            <>
              <span style={{ marginRight: 12 }}>Olá, {user.name}</span>
              <button onClick={logout}>Sair</button>
            </>
          ) : (
            <>
              <Link to="/register">Registrar</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
