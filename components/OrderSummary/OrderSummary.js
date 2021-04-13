import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import OrderSummaryRow from "../OrderSummaryRow/OrderSummaryRow";

const orderSummary = ({items,clear})=> {

    

    
    const calculateTotal = () => {


        let total = 0;
        items.map((item) => {
            total += item.price * item.quantity;

        })

        return total;

    }

    const cartItems = items.map((item, index) => (

        <OrderSummaryRow key={index} item={item}/>

    ))
    
    
    
    return(
        <Col md={5} className={"mx-auto"} >
            <Card className="card border-0 ">
                <Card.Header className=" card-2">
                    <Card.Text className="text-muted mt-md-4 mb-2 space">YOUR ORDER</Card.Text>
                    <hr className="my-2"/>
                </Card.Header>
                <Card.Body className="pt-0">
                    {cartItems}
                    <hr className="my-2"/>
                    <Row >
                        <Col >
                            <Row className="justify-content-between">
                                <Col className="col-4">
                                    <p className="mb-1"><b>Subtotal</b></p>
                                </Col>
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>{calculateTotal()} €</b></p>
                                </div>
                            </Row>
                            <Row className="justify-content-between">
                                <Col className="col">
                                    <p className="mb-1"><b>Shipping</b></p>
                                </Col>
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>0 SEK</b></p>
                                </div>
                            </Row>
                            <Row className="justify-content-between">
                                <Col className="col-4">
                                    <p><b>Total</b></p>
                                </Col>
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>{calculateTotal()} €</b></p>
                                </div>
                            </Row>
                            <hr className="my-0"/>
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <Link href={"/confirmation"}>
                                <Button type="button" onClick={() => clear()} name="" id=""
                                        className="btn btn-lg btn-block ">
                                    PURCHASE {calculateTotal()} €
                                </Button>
                            </Link>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        
    )
    
    
}

export default orderSummary;