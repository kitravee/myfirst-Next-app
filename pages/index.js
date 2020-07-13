import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a Software Engineer, Focus on Full-Stack Development, coding both
          back-end and front-end. I love open-source and community development.
          <a href='https://www.linkedin.com/in/kitravee'>
            <img
              src='https://img.shields.io/badge/LinkedIn--_.svg?style=social&logo=linkedin'
              alt='LinkedIn'
            />
          </a>
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
