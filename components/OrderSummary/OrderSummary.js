import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import OrderSummaryRow from "../OrderSummaryRow/OrderSummaryRow";

const orderSummary = ({items,clear})=> {

    

    console.log("order summary",items)
    
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
        <Col class="col-md-5">
            <Card class="card border-0 ">
                <Card.Header class="card-header card-2">
                    <Card.Text class="card-text text-muted mt-md-4 mb-2 space">YOUR ORDER</Card.Text>
                    <hr className="my-2"/>
                </Card.Header>
                <Card.Body class="card-body pt-0">
                    {cartItems}
                    <hr className="my-2"/>
                    <div className="row ">
                        <div className="col">
                            <div className="row justify-content-between">
                                <div className="col-4">
                                    <p className="mb-1"><b>Subtotal</b></p>
                                </div>
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>{calculateTotal()} €</b></p>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col">
                                    <p className="mb-1"><b>Shipping</b></p>
                                </div>
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>0 SEK</b></p>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-4">
                                    <p><b>Total</b></p>
                                </div>
                                <div className="flex-sm-col col-auto">
                                    <p className="mb-1"><b>{calculateTotal()} €</b></p>
                                </div>
                            </div>
                            <hr className="my-0"/>
                        </div>
                    </div>
                    <Row class="row mb-5 mt-4 ">
                        <Col class="row mb-md-5">
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