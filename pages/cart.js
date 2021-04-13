import {connect} from "react-redux";
import {clearAllItemsAction, removeItemAction, updateItemAction} from "../store/actions";
import CartItem from "../components/CartItem/CartItem";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Head from "next/head";
import Link from 'next/link'

export function Cart({basket, updateItem, removeItem}) {


    const calculateTotal = () => {


        let total = 0;
        basket.items.map((item) => {
            total += item.price * item.quantity;

        })

        return total;

    }

    let cart = (
        <div className="text-center">
            <h1>Cart Empty!</h1>
            <p>Get yourself something nice..</p>

        </div>);


    if (basket.items.length > 0) {


        let cartContents = basket.items.map((item, index) => (
                <CartItem key={item.id} item={item} update={updateItem}
                          remove={removeItem}/>
            )
        )

        cart = [


            <Table key={"table"} striped bordered hover responsive>

                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {cartContents}
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td> {calculateTotal()} €</td>
                </tr>
                </tbody>
            </Table>

        ,<Row key={"row"} className="mr-auto flex-lg-nowrap">
            <Col>
                <Link href={"/checkout"}>
                    <Button className="mr-auto">Checkout</Button>
                </Link>
            </Col>

        </Row>
 
        ]
    }


    return (
        <Container>

            <Head>
                <title>Cart</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>

            <Row>
                <Col>
                    {cart}
                </Col>
            </Row>

         


        </Container>

    )


}

const mapDispatchToProps = {
    updateItem: updateItemAction,
    removeItem: removeItemAction
};

const mapStateToProps = state => ({
    basket: state.basket
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);