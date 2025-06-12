import Head from 'next/head';
import HeroHeader from '../components/home/HeroHeader';
import AreasAtuacao from '../components/home/AreasAtuacao';
import CalculadoraSolar from '../components/home/CalculadoraSolar';
import ProjetosGaleria from '../components/home/ProjetosGaleria';
import VideoExplicativo from '../components/home/VideoExplicativo';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ecoss Engenharia - Soluções completas em engenharia</title>
        <meta name="description" content="A Ecoss Engenharia é um hub completo de serviços e soluções em engenharia, atuando nas áreas de Engenharia Civil, Ambiental, Solar, Incorporação Imobiliária e Construção Civil." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroHeader />
      <AreasAtuacao />
      <CalculadoraSolar />
      <ProjetosGaleria />
      <VideoExplicativo />
    </Layout>
  );
}
