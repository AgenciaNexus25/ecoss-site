import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroHeader() {
  return (
    <section className="hero">
      <Image 
        src="/images/hero/engenharia_hero_principal.jpg" 
        alt="Ecoss Engenharia - Soluções Completas em Engenharia" 
        fill
        className="object-cover"
        priority
      />
      <div className="container">
        <div className="hero-content">
          <h1>
            Soluções completas em engenharia para um futuro sustentável
          </h1>
          <p>
            Engenharia Civil, Ambiental, Solar, Incorporação Imobiliária e Construção Civil
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/servicos" className="btn btn-primary">
              Conheça Nossos Serviços
            </Link>
            <Link href="/contato" className="btn btn-outline">
              Solicite um Orçamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
