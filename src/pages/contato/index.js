import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function Contato() {
  return (
    <Layout>
      <Head>
        <title>Contato - Ecoss Engenharia</title>
        <meta name="description" content="Entre em contato com a Ecoss Engenharia. Solicite orçamentos, tire dúvidas e agende uma consultoria personalizada." />
      </Head>

      <div className="page-container">
        <div className="page-header">
          <h1>Contato</h1>
          <p>Estamos à disposição para atender você</p>
        </div>

        <div className="content-section">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              
              <div className="info-item">
                <h3>Endereço</h3>
                <p>Av. Tecnologia Verde, 1500</p>
                <p>Bairro Sustentável - São Paulo/SP</p>
                <p>CEP: 01000-000</p>
              </div>
              
              <div className="info-item">
                <h3>Telefones</h3>
                <p>(11) 3000-0000</p>
                <p>(11) 99000-0000 (WhatsApp)</p>
              </div>
              
              <div className="info-item">
                <h3>E-mail</h3>
                <p>contato@ecossengenharia.com.br</p>
              </div>
              
              <div className="info-item">
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta: 08h às 18h</p>
                <p>Sábado: 09h às 13h</p>
              </div>
              
              <div className="social-media">
                <h3>Redes Sociais</h3>
                <div className="social-icons">
                  <a href="https://www.facebook.com/ecossengenharia" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
                  <a href="https://www.instagram.com/ecossengenharia" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                  <a href="https://www.linkedin.com/company/ecossengenharia" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Envie sua Mensagem</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome completo*</label>
                  <input type="text" id="nome" name="nome" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail*</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="assunto">Assunto*</label>
                  <select id="assunto" name="assunto" required>
                    <option value="">Selecione</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="duvida">Dúvidas</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem*</label>
                  <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <h2>Nossa Localização</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975216518994!2d-46.65429492549636!3d-23.56518017859046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1687456789012!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da Ecoss Engenharia"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
