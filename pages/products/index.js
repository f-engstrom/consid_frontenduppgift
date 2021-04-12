import {request} from "../../lib/datocms";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import {ALL_PRODUCTS_QUERY} from "../../querys/querys";
import Container from 'react-bootstrap/Container';
import Head from "next/head";


export async function getStaticProps({params}) {


    const {allProducts} = await request({
        query: ALL_PRODUCTS_QUERY,
        variables: {}
    });

    return {
        props: {allProducts}
    };
}

const Product = ({allProducts}) => {

    console.log("products", allProducts)

    
    
    
    return (

        <Container>

            <Head>
                <title>Products</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>
            
            {allProducts.map((product, index) => (

                 <ProductListItem product={product}/>

            ))}
        </Container>

    )
}

export default Product