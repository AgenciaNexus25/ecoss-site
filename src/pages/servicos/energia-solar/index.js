import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function EnergiaSolar() {
  return (
    <Layout>
      <Head>
        <title>Energia Solar - Ecoss Engenharia</title>
        <meta name="description" content="Soluções completas em energia fotovoltaica para residências e empresas, incluindo sistemas conectados à rede e autônomos." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Energia Solar</h1>
          <p>Soluções completas em energia fotovoltaica para residências e empresas, incluindo sistemas conectados à rede e autônomos.</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Energia Solar</h2>
          <p>A Ecoss Engenharia oferece soluções completas em energia fotovoltaica para residências e empresas, incluindo sistemas conectados à rede e autônomos. Nossa equipe realiza todo o processo, desde a compra dos equipamentos até o comissionamento e testes, garantindo máxima eficiência e tranquilidade para o cliente.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Sistemas On-Grid (Conectados à Rede)</h3>
              <p>Dimensionamento personalizado conforme consumo, projeto completo com simulação de geração, homologação junto à concessionária, instalação e comissionamento, e monitoramento remoto de performance.</p>
            </div>
            
            <div className="service-card">
              <h3>Sistemas Off-Grid (Autônomos)</h3>
              <p>Dimensionamento para locais sem acesso à rede elétrica, projeto completo com banco de baterias, instalação e configuração de controladores de carga, comissionamento e testes de autonomia, e manutenção preventiva e corretiva.</p>
            </div>
            
            <div className="service-card">
              <h3>Serviços Complementares</h3>
              <p>Análise de viabilidade técnica e econômica, consultoria para financiamento solar, manutenção preventiva e corretiva, monitoramento contínuo de performance, e ampliação de sistemas existentes.</p>
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


