import React from 'react'
import { Link } from 'react-router-dom'

export default function GameCard({ game }){
  return (
    <div className="game-card" style={{ background:'white', padding:10, borderRadius:8, boxShadow:'0 6px 18px rgba(11,20,50,0.04)' }}>
      {game.background_image ? <img src={game.background_image} alt={game.name} /> : <div style={{height:120,background:'#eee',borderRadius:8}} />}
      <h4 style={{margin:'8px 0 4px'}}>{game.name}</h4>
      <small>{game.released}</small>
      <div style={{ marginTop: 8 }}>
        <Link to={`/game/${game.id}`}><button>Ver detalhes</button></Link>
      </div>
    </div>
  )
}
