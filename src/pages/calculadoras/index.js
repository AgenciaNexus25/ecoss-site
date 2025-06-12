import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function Calculadoras() {
  return (
    <Layout>
      <Head>
        <title>Calculadoras - Ecoss Engenharia</title>
        <meta name="description" content="Calculadoras da Ecoss Engenharia para estimativa de economia com energia solar e simulação de financiamento imobiliário." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Calculadoras</h1>
          <p>Ferramentas para simulação e estimativas de projetos</p>
        </div>

        <div className="content-section">
          <h2>Nossas Calculadoras</h2>
          <p>A Ecoss Engenharia disponibiliza ferramentas de cálculo para ajudar você a estimar custos, economia e viabilidade de seus projetos.</p>
          
          <div className="calculators-grid">
            <div className="calculator-card">
              <h3>Calculadora Solar</h3>
              <p>Estime quanto você pode economizar com a instalação de um sistema de energia solar fotovoltaica.</p>
              
              <div className="calculator-form">
                <h4>Simulação de Economia</h4>
                <div className="form-group">
                  <label htmlFor="consumo">Consumo mensal (kWh):</label>
                  <input type="number" id="consumo" name="consumo" placeholder="Ex: 500" />
                </div>
                
                <button className="btn btn-secondary">Calcular Economia</button>
                
                <div className="calculator-results">
                  <p>Preencha o formulário acima para ver os resultados da simulação.</p>
                </div>
              </div>
            </div>
            
            <div className="calculator-card">
              <h3>Calculadora de Financiamento</h3>
              <p>Simule as parcelas e condições de financiamento para seu projeto imobiliário.</p>
              
              <div className="calculator-form">
                <h4>Simulação de Financiamento</h4>
                <div className="form-group">
                  <label htmlFor="valor">Valor do imóvel (R$):</label>
                  <input type="number" id="valor" name="valor" placeholder="Ex: 500000" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="entrada">Valor da entrada (R$):</label>
                  <input type="number" id="entrada" name="entrada" placeholder="Ex: 100000" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="prazo">Prazo (anos):</label>
                  <input type="number" id="prazo" name="prazo" placeholder="Ex: 30" />
                </div>
                
                <button className="btn btn-secondary">Calcular Parcelas</button>
                
                <div className="calculator-results">
                  <p>Preencha o formulário acima para ver os resultados da simulação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Precisa de uma análise mais detalhada?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada do seu projeto.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Consultoria</a>
        </div>
      </div>
    </Layout>
  );
}
