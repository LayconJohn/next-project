import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyle from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyle.headingMd}>
        <p>Esse é o primeiro projeto Next, vamobora!</p>
        <p>
          (Baseado na{' '}
          <a href="https://nextjs.org/learn">documentação oficial no Next.js</a>.)
        </p>
      </section>
    </Layout>
  );
}
