import styles from "../styles/Home.module.css";
import Head from "next/head";
import {request} from "../lib/datocms";
import {PAGE_QUERY, PAGES_QUERY} from "../querys/querys";
import {StructuredText} from "react-datocms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProductCard from "../components/ProductCard/ProductCard";

export async function getStaticPaths() {


    const pages = await request({
        query: PAGES_QUERY,
        variables: {}
    });


    const paths = pages.allPages.map((page) => ({
        params: {slug: page.slug},
    }))


    return {paths, fallback: false}
}


export async function getStaticProps({params}) {


    const {page} = await request({
        query: PAGE_QUERY,
        variables: {
            pageSlug: params.slug,
            mainImageHeight: 400,
        }
    });

    return {
        props: {page}
    };
}


export default function ContentPage({page}) {


    return (

        <Container>
            <Head>
                <title>{page.title}</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>


            <Row>
                <Col className={"text-center"} md={12}>
                    <h1>{page.title}</h1>

                </Col>
            </Row>

            <Row>
                <Col md={12} className="text-center">
                    <Image  fluid
                           src={page.mainImage.url} alt=""/>
                </Col>
                <Col className="mt-3 text-justify" md={12} >
                    <StructuredText data={page.content}/>
                </Col>


            </Row>


        </Container>

    )
}