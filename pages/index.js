import Head from 'next/head'
import {request} from "../lib/datocms";
import {HOMEPAGE_QUERY} from "../querys/querys";
import ProductCard from "../components/ProductCard/ProductCard";
import {StructuredText} from "react-datocms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";


export async function getStaticProps() {
    const {startpage, allProducts} = await request({
        query: HOMEPAGE_QUERY,
        variables: {
            mainImageHeight:400,
            nrProducts: 4,
            productImagesHeight:200
        }
    });


    return {
        props: {startpage, allProducts}
    };
}

export default function Home({startpage, allProducts}) {



    return (
        <Container>
            <Head>
                <title>{startpage.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            
            <Row>
               <Col md={12} className="text-center"> <Image style={{width: 900, height: 500}} fluid src={startpage.mainImage.url} alt=""/></Col>
                <Col md={12} className="text-center" ><h1>{startpage.title}</h1></Col>
                <Col md={12} className="text-center">
                    <StructuredText data={startpage.content}/>
                </Col>
                

            </Row>
            
            <Row className={"bg-gray"}>
                <Col xs={12}>
                    <h2>Featured Products</h2>
                </Col>
                {
                    allProducts.map(product =>
                        <ProductCard key={product.id} product={product}/>)
                }
            </Row>
           


        </Container>
    )
}
