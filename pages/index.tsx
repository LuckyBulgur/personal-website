import Head from 'next/head';

import Footer from '../components/footer';
import Hero from '../components/pages/hero';
import Projects from '../components/pages/projects';
import Skills from '../components/pages/skills';

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ugur Aydogan</title>
        <meta name='description' content='I am a passionate developer and always looking for new challenging projects.' />
      </Head>
      <Hero></Hero>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </>
  )
}

export default Home