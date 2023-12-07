import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle, name } from '../components/layout/layout';
import utilStyle from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyle.headingMd}>
        <p>Olá! Me chamo {name}!! Esse é meu primeiro projeto em Next.js a partir da documentação oficial</p>
        <p>
          (Baseado na{' '}
          <a href="https://nextjs.org/learn">documentação oficial no Next.js</a>.)
        </p>
      </section>
    </Layout>
  );
}
