import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import {clearAllItemsAction} from "../store/actions";
import Head from "next/head";

const checkout = ({basket,clearAllItems}) => {

    const {items} = basket;

 
    
    let summary = (<Col><h1 style={{textAlign:"center"}}>Oh no, your cart is empty!</h1></Col>)

    if(items.length > 0){
        
        summary = <OrderSummary items={items} clear={clearAllItems} />
        
    }



    return (
        <Container>

            <Head>
                <title>Checkout</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>
            
            <Row>

                {summary}

            </Row>
        </Container>
    )

}


const mapStateToProps = state => (
    {
        basket: state.basket
    }
);

const mapDispatchToProps = {
    clearAllItems: clearAllItemsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(checkout);