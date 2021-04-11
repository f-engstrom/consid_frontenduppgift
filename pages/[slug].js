import styles from "../styles/Home.module.css";
import Head from "next/head";
import {request} from "../lib/datocms";
import {PAGE_QUERY, PAGES_QUERY} from "../querys/querys";




export async function getStaticPaths() {


    const pages = await request({
        query: PAGES_QUERY,
        variables: {}
    });

    
    
    const paths = pages.allPages.map((page) => ({
        params: {slug: page.slug},
    }))

    console.log("paths",paths)

    return {paths, fallback: false}
}


export async function getStaticProps({params}) {

    console.log("params", params)

    const data = await request({
        query: PAGE_QUERY,
        variables: {pageSlug: params.slug}
    });

    console.log(data)
    return {
        props: {data}
    };
}


export default function ContentPage({data}) {
    
    console.log("page data",data);
    
    
    
    return (
        <div>Content Page</div>
    )
}