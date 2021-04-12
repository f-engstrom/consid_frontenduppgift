import {request} from "../../lib/datocms";
import {ALL_PRODUCT_IDS_QUERY, PRODUCT_QUERY} from "../../querys/querys";
import {connect} from "react-redux";
import {addItemAction} from "../../store/actions";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductImageCarousel from '../../components/ProductImageCarousel/ProductImageCarousel'
import {StructuredText} from "react-datocms";
import Head from "next/head";

export async function getStaticPaths() {


    const {allProducts} = await request({
        query: ALL_PRODUCT_IDS_QUERY,
        variables: {}
    });


    const paths = allProducts.map((product) => ({
        params: {id: product.id},
    }))

    console.log("paths", paths)

    return {paths, fallback: false}
}


export async function getStaticProps({params}) {
    console.log("params", params)


    const {product} = await request({
        query: PRODUCT_QUERY,
        variables: {id: params.id.toString()}
    });

    console.log(product)
    return {
        props: {product}
    };
}

const Product = ({product, addItem}) => {

    console.log("product", product)

    
    return (
        
        
        <Container>

            <Head>
                <title>{product.name}</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>
            
            <Row className='mt-5'>
                <Col >
                    <ProductImageCarousel images={[product.mainImage,...product.alternativeImages]} />
                </Col>
                <Col>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <StructuredText data={product.description}/>
                    <Button onClick={() => addItem(product)}>Add to cart</Button>
                </Col>
            </Row>
            
          
        </Container>
        

    )
}

const mapDispatchToProps = {
   addItem:addItemAction
};

const mapStateToProps = state => ({
    basket: state.basket
});
export default connect(mapStateToProps,mapDispatchToProps)(Product);
