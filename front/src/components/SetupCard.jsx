import React from 'react'

export default function SetupCard({ setup }){
  return (
    <div style={{ background:'white', padding:12, borderRadius:8 }}>
      <h4>Setup gerado</h4>
      <ul>
        {setup.components.map((c, idx) => <li key={idx}>{c.type}: {c.model}</li>)}
      </ul>
      <small>Criado em: {new Date(setup.createdAt).toLocaleString()}</small>
    </div>
  )
}
