import Head from 'next/head';
import Layout, { siteTitle, name } from '../components/layout/layout';
import utilStyle from "../styles/utils.module.css";
import { getSortedPostdata } from "../lib/post";

export async function getStaticProps(){
  const allPostsData = getSortedPostdata();
  return {
    props: {
      allPostsData
    },
  };
}

export default function Home({ allPostsData }) {
  console.log(allPostsData)
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

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>
          Blog
        </h2>
        <ul className={utilStyle.list}>
          {allPostsData.map((item) => {
            return <li className={utilStyle.listItem} key={item.id}>
              <strong>{item.title}</strong> <br />
              {item.id} <br />
              {item.date} 
            </li>
          })}
        </ul>
      </section>
    </Layout>
  );
}
