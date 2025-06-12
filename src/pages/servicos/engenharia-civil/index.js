import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/layout/Layout';

export default function EngenhariaCivil() {
  return (
    <Layout>
      <Head>
        <title>Engenharia Civil - Ecoss Engenharia</title>
        <meta name="description" content="Serviços de Engenharia Civil da Ecoss Engenharia. Projetos estruturais, consultoria, laudos técnicos e muito mais." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Engenharia Civil</h1>
          <p>Soluções completas em projetos estruturais e consultoria</p>
        </div>

        <div className="content-section">
          <h2>Nossos Serviços em Engenharia Civil</h2>
          <p>A Ecoss Engenharia oferece serviços completos de engenharia civil, desde o planejamento inicial até a execução e acompanhamento de obras.</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Projetos Estruturais</h3>
              <p>Desenvolvimento de projetos estruturais para edificações residenciais, comerciais e industriais.</p>
            </div>
            
            <div className="service-card">
              <h3>Consultoria Técnica</h3>
              <p>Consultoria especializada para otimização de projetos e solução de problemas construtivos.</p>
            </div>
            
            <div className="service-card">
              <h3>Laudos e Perícias</h3>
              <p>Elaboração de laudos técnicos e perícias para avaliação de estruturas e patologias construtivas.</p>
            </div>
            
            <div className="service-card">
              <h3>Gerenciamento de Obras</h3>
              <p>Acompanhamento e gerenciamento completo de obras, garantindo qualidade e cumprimento de prazos.</p>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Precisa de um projeto de engenharia civil?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada do seu projeto.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </Layout>
  );
}
