import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from "react-bootstrap/Badge";
import {connect} from "react-redux";
import {Cart} from "../../pages/cart";
import {useState} from "react";


const pageHeader = ({pages,basket}) => {



    const calculateCartAmount = () => {


        let total = 0;
        basket.items.map((item) => {
            total +=  parseInt( item.quantity);

        })

        return total;

    }
    
  

    const dropdownContentLinks =
        pages.map((page, index) => (

            <Link href={`/${page.slug}`} passHref>
                <NavDropdown.Item>
                    {page.title}
                </NavDropdown.Item>
            </Link>
        ))

    return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link href={`/`}>
                Consid Shopper
            </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link href={`/products`} passHref>
                        <Nav.Link>
                            Products
                        </Nav.Link>
                    </Link>
                    <NavDropdown title="About Us" id="collasible-nav-dropdown">
                        {dropdownContentLinks}
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Link href={"/cart"} className="btn border">
                            <div>
                                <Badge className="m-2" variant="light">{calculateCartAmount()}</Badge>
                                <img  className="text-primary" style={{height: 2 + 'em'}} src="/cart.svg" alt=""/>
                            </div>
                           
                        </Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );


}


const mapStateToProps = state => ({
    basket: state.basket
});

export default connect(mapStateToProps)(pageHeader);