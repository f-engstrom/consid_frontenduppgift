import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from "react-bootstrap/Badge";
import {connect} from "react-redux";
import {Cart} from "../../pages/cart";
import {useState} from "react";
import Col from "react-bootstrap/Col";


const pageHeader = ({pages, basket}) => {


    const calculateCartAmount = () => {


        let total = 0;
        basket.items.map((item) => {
            total += parseInt(item.quantity);

        })

        return total;

    }


    const dropdownContentLinks =
        pages.map((page) => (

            <Link key={page.slug} href={`/${page.slug}`} passHref>
                <NavDropdown.Item>
                    {page.title}
                </NavDropdown.Item>
            </Link>
        ))

    return (


        <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand><Link passHref href={`/`}>
                <a style={{color: "white"}} href={""}> Consid Shopper</a>
            </Link></Navbar.Brand>

            <Nav className=" d-sm-block ml-auto d-md-none d-l-none d-xl-none">
            <Nav.Link>
                    <Link href={"/cart"} className="btn border">
                        <div>
                            <Badge className="m-2" variant="light">{calculateCartAmount()}</Badge>
                            <img className="text-primary" style={{height: 2 + 'em'}} src="/cart.svg" alt=""/>
                        </div>

                    </Link>
                </Nav.Link>

            </Nav>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link href={`/products`} passHref>
                        <Nav.Link>
                            Products
                        </Nav.Link>
                    </Link>
                    <NavDropdown title="About Us" id="collapsible-nav-dropdown">
                        {dropdownContentLinks}
                    </NavDropdown>
                </Nav>

                <Nav className="d-none d-sm-none d-xs-none d-md-block d-lg-block d-xl-block" >
                    <Nav.Link>
                        <Link href={"/cart"} className="btn border">
                            <div>
                                <Badge className="m-2" variant="light">{calculateCartAmount()}</Badge>
                                <img className="text-primary" style={{height: 2 + 'em'}} src="/cart.svg" alt=""/>
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