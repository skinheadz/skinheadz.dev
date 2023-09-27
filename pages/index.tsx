//Run me: npm run dev
import Head from 'next/head'

//used somewhere in the "head"
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import Compon from '../components/compon'


//Fetch data from API and store/display statically(on user's device)
// export async function getStaticProps() {
//   console.log("initializing");
//   try {
//     const response = await fetch('https://gateway.ipfs.io/ipns/tokens.uniswap.org/');
//     const tokenListJSON = await response.json();
//     if (tokenListJSON) return {props: tokenListJSON};
//   } catch (error) { console.log('NO PROPS(!): error fetching: ', error);}
  
//   return;
// }

//Main codebase with components
export default function Home(props) {
  return (
    <>
      <Head>  
        <meta name="description" content="Upsetting the small town of Whoville, a local elderly man steals everyone's presents the night before an important event. Stay tuned for live updates on the matter. Authored by skinheadz"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>skinheadz.dev</title>
        <link rel="shortcut icon" href="circle-64.ico" />
        <link rel="manifest" href="pwa.webmanifest" /> 
        <meta name="theme-color" content="#000000"/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="msapplication-navbutton-color" content="#000000"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000"/>
        {/* TODO: PWA: prompt component on-screen for installation. Also, "serviceworker", "serviceworker.scope", "serviceworker.src", "serviceworker.use_cache"  */}
        {/* <link rel="preconnect" href="https://www.zingerbugimages.com/backgrounds/pink_and_blue_stars.gif"></link> */}
      </Head>

      {/* {console.log(props.tokens)} */}


      
      <Compon />
  </>
  )
}
