import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function Projetos() {
  return (
    <Layout>
      <Head>
        <title>Projetos - Ecoss Engenharia</title>
        <meta name="description" content="Conheça os principais projetos realizados pela Ecoss Engenharia em Engenharia Civil, Ambiental, Solar e Construção Civil." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Nossos Projetos</h1>
          <p>Conheça alguns dos nossos principais trabalhos</p>
        </div>

        <div className="content-section">
          <h2>Projetos Realizados</h2>
          <p>A Ecoss Engenharia tem orgulho de apresentar alguns dos nossos principais projetos nas diversas áreas de atuação.</p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/images/projetos/projeto-residencial.jpg" alt="Projeto Residencial Sustentável" />
              </div>
              <div className="project-info">
                <h3>Residencial Eco Ville</h3>
                <p className="project-category">Engenharia Civil / Construção</p>
                <p>Condomínio residencial com 24 unidades, construído com técnicas sustentáveis e certificação LEED.</p>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/images/projetos/projeto-solar.jpg" alt="Usina Solar Comercial" />
              </div>
              <div className="project-info">
                <h3>Usina Solar Comercial</h3>
                <p className="project-category">Energia Solar</p>
                <p>Instalação de sistema fotovoltaico de 75kWp para centro comercial, gerando economia de 90% na conta de energia.</p>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/images/projetos/projeto-ambiental.jpg" alt="Recuperação de Área Degradada" />
              </div>
              <div className="project-info">
                <h3>Recuperação de Área Degradada</h3>
                <p className="project-category">Engenharia Ambiental</p>
                <p>Projeto de recuperação de área degradada de 5 hectares, com plantio de espécies nativas e monitoramento ambiental.</p>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/images/projetos/projeto-incorporacao.jpg" alt="Edifício Comercial Green Tower" />
              </div>
              <div className="project-info">
                <h3>Edifício Comercial Green Tower</h3>
                <p className="project-category">Incorporação Imobiliária</p>
                <p>Desenvolvimento e incorporação de edifício comercial com 12 andares e certificação de eficiência energética.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Quer desenvolver um projeto com a Ecoss?</h2>
          <p>Entre em contato conosco para uma avaliação personalizada do seu projeto.</p>
          <a href="/contato" className="btn btn-primary">Solicitar Orçamento</a>
        </div>
      </div>
    </Layout>
  );
}
