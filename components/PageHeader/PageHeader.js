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
            <NavDropdown.Item className="nav-link nav-item ">
                <Link href={`/${page.slug}`}>
                    {page.title}
                </Link>
            </NavDropdown.Item>
        ))

    return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link href={`/`}>
                Consid Shopper
            </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/"><Link href={`/products`}>
                        Products
                    </Link></Nav.Link>
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