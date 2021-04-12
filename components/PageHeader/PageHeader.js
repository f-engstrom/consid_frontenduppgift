import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const pageHeader = (props) => {


    const handleCollapse = () => {

        document.getElementById("navbarCollapse").classList.toggle("collapse");


    }

    const dropdownContentLinks =
        props.pages.map((page, index) => (

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
                            <img className="text-primary" style={{height: 2 + 'em'}} src="/cart.svg" alt=""/>
                        </Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );


}

export default pageHeader;