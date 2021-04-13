import {request} from "../../lib/datocms";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import {ALL_PRODUCTS_QUERY} from "../../querys/querys";
import Container from 'react-bootstrap/Container';
import Head from "next/head";
import {addItemAction} from "../../store/actions";
import {connect} from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export async function getStaticProps({params}) {


    const {allProducts} = await request({
        query: ALL_PRODUCTS_QUERY,
        variables: {productImagesHeight:150}
    });

    return {
        props: {allProducts}
    };
}

const Products = ({allProducts, addItem}) => {

    
    
    return (

        <Container>

            <Head>
                <title>Products</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>
            
            <Row className="d-flex justify-content-center">
                <Col md={10}>
                    {allProducts.map((product) => (

                        <ProductListItem key={product.id} product={product} addToCart={addItem}/>

                    ))}
                </Col>
            
            </Row>
         
        </Container>

    )
}


const mapDispatchToProps = {
    addItem: addItemAction
};

const mapStateToProps = state => ({
    basket: state.basket
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);