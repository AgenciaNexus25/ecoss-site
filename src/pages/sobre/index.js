import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function Sobre() {
  return (
    <Layout>
      <Head>
        <title>Sobre Nós - Ecoss Engenharia</title>
        <meta name="description" content="Conheça a Ecoss Engenharia, nossa história, missão, visão, valores e equipe de profissionais qualificados." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Sobre a Ecoss Engenharia</h1>
          <p>Soluções completas em engenharia para um futuro sustentável</p>
        </div>

        <div className="content-section">
          <h2>Nossa História</h2>
          <p>A Ecoss Engenharia foi fundada com o propósito de oferecer soluções integradas em engenharia, com foco em sustentabilidade e inovação. Desde o início, nossa missão tem sido desenvolver projetos que aliem qualidade técnica, responsabilidade ambiental e viabilidade econômica.</p>
          
          <p>Com uma equipe multidisciplinar de engenheiros e técnicos especializados, a Ecoss Engenharia se consolidou no mercado como referência em projetos sustentáveis e de alta qualidade.</p>
        </div>
        
        <div className="mission-vision-values">
          <div className="mission">
            <h3>Missão</h3>
            <p>Desenvolver soluções em engenharia que promovam o desenvolvimento sustentável, aliando inovação tecnológica, responsabilidade ambiental e viabilidade econômica.</p>
          </div>
          
          <div className="vision">
            <h3>Visão</h3>
            <p>Ser referência nacional em engenharia sustentável, reconhecida pela excelência técnica, inovação e compromisso com o meio ambiente.</p>
          </div>
          
          <div className="values">
            <h3>Valores</h3>
            <ul>
              <li>Sustentabilidade</li>
              <li>Excelência técnica</li>
              <li>Inovação</li>
              <li>Ética e transparência</li>
              <li>Compromisso com o cliente</li>
              <li>Responsabilidade social</li>
            </ul>
          </div>
        </div>
        
        <div className="team-section">
          <h2>Nossa Equipe</h2>
          <p>A Ecoss Engenharia conta com uma equipe multidisciplinar de profissionais altamente qualificados, com formação e experiência nas diversas áreas da engenharia.</p>
          
          <div className="team-grid">
            <div className="team-member">
              <h3>Engenharia Civil</h3>
              <p>Profissionais especializados em projetos estruturais, gerenciamento de obras e consultoria técnica.</p>
            </div>
            
            <div className="team-member">
              <h3>Engenharia Ambiental</h3>
              <p>Especialistas em licenciamento ambiental, gestão de resíduos e estudos de impacto ambiental.</p>
            </div>
            
            <div className="team-member">
              <h3>Engenharia Solar</h3>
              <p>Técnicos e engenheiros especializados em dimensionamento, instalação e manutenção de sistemas fotovoltaicos.</p>
            </div>
            
            <div className="team-member">
              <h3>Incorporação e Construção</h3>
              <p>Profissionais com experiência em desenvolvimento imobiliário e execução de obras.</p>
            </div>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Quer conhecer mais sobre a Ecoss Engenharia?</h2>
          <p>Entre em contato conosco para saber como podemos ajudar no seu projeto.</p>
          <a href="/contato" className="btn btn-primary">Fale Conosco</a>
        </div>
      </div>
    </Layout>
  );
}
