import '../styles/globals.css';
import '../styles/components.css';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${openSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
