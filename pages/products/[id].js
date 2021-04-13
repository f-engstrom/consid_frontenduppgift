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


    return {paths, fallback: false}
}


export async function getStaticProps({params}) {


    const {product} = await request({
        query: PRODUCT_QUERY,
        variables: {id: params.id.toString(),
            imagesHeight:433,
            imagesWidth: 635
        }
    });

    return {
        props: {product}
    };
}

const Product = ({product, addItem}) => {


    const cartItem = {id: product.id, mainImage: {url: product.mainImage.url}, name: product.name, price: product.price}


    return (
        
        
        <Container>

            <Head>
                <title>{product.name}</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>
            
            <Row className='mt-5'>
                <Col md={6} xs={12} >
                    <ProductImageCarousel images={[product.mainImage,...product.alternativeImages]} />
                </Col>
                <Col md={6} xs={12}>
                    <h5 className={"mt-3"}>{product.name}</h5>
                    <p>{product.price} €</p>
                    <StructuredText data={product.description}/>
                    <Button onClick={() => addItem(cartItem)}>Add to cart</Button>
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
