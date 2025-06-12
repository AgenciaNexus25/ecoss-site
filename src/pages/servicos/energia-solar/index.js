import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function EnergiaSolar() {
  return (
    <Layout>
      <Head>
        <title>Energia Solar - Ecoss Engenharia</title>
        <meta name="description" content="Soluções em energia solar fotovoltaica da Ecoss Engenharia. Projetos residenciais, comerciais e industriais para economia e sustentabilidade." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Energia Solar</h1>
          <p>Soluções sustentáveis em energia fotovoltaica</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Energia Solar</h2>
          <p>A Ecoss Engenharia oferece soluções completas em energia solar fotovoltaica, desde o dimensionamento até a instalação e manutenção de sistemas.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Projetos Residenciais</h3>
              <p>Sistemas fotovoltaicos para residências, garantindo economia e sustentabilidade para sua casa.</p>
            </div>
            
            <div className="service-card">
              <h3>Projetos Comerciais</h3>
              <p>Soluções para empresas e comércios, reduzindo custos operacionais e promovendo sustentabilidade.</p>
            </div>
            
            <div className="service-card">
              <h3>Projetos Industriais</h3>
              <p>Sistemas de grande porte para indústrias, com foco em eficiência energética e redução de custos.</p>
            </div>
            
            <div className="service-card">
              <h3>Manutenção e Monitoramento</h3>
              <p>Serviços de manutenção preventiva e corretiva, além de monitoramento remoto de desempenho.</p>
            </div>
          </div>
        </div>
        
        <div className="calculator-preview">
          <h2>Calcule sua Economia</h2>
          <p>Use nossa calculadora para estimar quanto você pode economizar com energia solar.</p>
          <a href="/calculadoras" className="btn btn-secondary">Acessar Calculadora</a>
        </div>
        
        <div className="cta-section">
          <h2>Pronto para economizar com energia solar?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada do seu projeto.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </Layout>
  );
}
