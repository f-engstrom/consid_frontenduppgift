import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import App from "next/app";
import {request} from "../lib/datocms";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PAGES_QUERY} from "../querys/querys";
import {wrapper} from "../store/store";


function MyApp({Component, pageProps, allPages}) {


    return (
        <Layout pages={allPages}>
            <Component {...pageProps} />
        </Layout>

    )
}


MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    const {allPages} = await request({
        query: PAGES_QUERY,
        variables: {}
    });


    return {...appProps, allPages}
}


export default wrapper.withRedux(MyApp);
