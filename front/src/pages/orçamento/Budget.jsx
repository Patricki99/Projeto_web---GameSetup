import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../style/Budget.css';

export default function PaginaOrcamento() {
  const [orcamento, setOrcamento] = useState('');
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSetBudget = (e) => {
    e.preventDefault();
    const valor = parseFloat(orcamento);
    
    if (!valor || valor <= 0) {
      setErro('Por favor, insira um valor válido maior que 0');
      return;
    }

    localStorage.setItem('userBudget', JSON.stringify(valor));
    setErro(null);
    navigate('/dashboard');
  };

  return (
    <div className="budget-wrapper">
      <div className="budget-header">
        <h1 className="budget-title">Qual é seu orçamento?</h1>
        <p className="budget-description">
          Quanto você tem disponível para montar seu PC? Com base no seu orçamento, 
          vamos sugerir componentes que atendam aos requisitos do jogo que você escolher.
        </p>
      </div>

      <form onSubmit={handleSetBudget} className="budget-form">
        <div className="budget-input-group">
          <label className="budget-label">Orçamento (R$)</label>
          <input
            className="budget-input"
            type="number"
            value={orcamento}
            onChange={(e) => setOrcamento(e.target.value)}
            placeholder="Ex: 5000"
            required
          />
        </div>

        {erro && <div className="budget-error">{erro}</div>}

        <button type="submit" className="budget-submit">
          Continuar com R$ {orcamento || '0'}
        </button>
      </form>

      <div className="budget-suggestions">
        <h2 className="budget-suggestions-title">Faixas de orçamento sugeridas</h2>
        <div className="budget-tiers">
          <div className="budget-tier-card">
            <div className="budget-tier-value">R$ 3-5 mil</div>
            <div className="budget-tier-name">Mínimo</div>
            <div className="budget-tier-desc">Roda jogos leves</div>
          </div>
          <div className="budget-tier-card">
            <div className="budget-tier-value">R$ 5-10 mil</div>
            <div className="budget-tier-name">Intermediário</div>
            <div className="budget-tier-desc">Bom custo-benefício</div>
          </div>
          <div className="budget-tier-card">
            <div className="budget-tier-value">R$ 10+ mil</div>
            <div className="budget-tier-name">Premium</div>
            <div className="budget-tier-desc">Máxima performance</div>
          </div>
        </div>
      </div>
    </div>
  );
}
