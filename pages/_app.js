import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import App from "next/app";
import {request} from "../lib/datocms";


const PAGES_QUERY = `query Pages {
  allPages {
    title
    slug
    position
  }
}`;



function MyApp({ Component, pageProps,pages }) {
    
    
  return(
      <Layout pages={pages.allPages}>
        <Component {...pageProps} />
      </Layout>
      
  ) 
}



MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

    const pages = await request({
        query: PAGES_QUERY,
        variables: {limit: 10}
    });
  
  return { ...appProps,pages }
}


export default MyApp
