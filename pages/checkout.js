import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import {clearAllItemsAction} from "../store/actions";

const checkout = ({basket,clearAllItems}) => {

    const {items} = basket;

 
    
    let summary = (<Col><h1 style={{textAlign:"center"}}>Oh no, your cart is empty!</h1></Col>)

    if(items.length > 0){
        
        summary = <OrderSummary items={items} clear={clearAllItems} />
        
    }



    return (
        <Container>

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