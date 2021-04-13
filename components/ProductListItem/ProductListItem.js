import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const productListItem = ({product, addToCart}) => {


    const description = product.description.value.document.children[0].children[0].value;

    const cartItem = {id: product.id, mainImage: {url: product.mainImage.url}, name: product.name, price: product.price}


    return (


        <Row className='p-2 bg-white border rounded'>
            <Col md={3} className="mt-1"><Image src={product.mainImage.url} fluid
                               rounded/></Col>
            <Col md={6} className={"mt-1 border-right"}>
                <h5>{product.name}</h5>
                <p className="text-justify text-truncate para mb-0">
                    {description}
                </p>

            </Col>
            
            <Col md={3} className="align-items-center align-content-center col-md-3  mt-1">
                <div className="d-flex flex-row align-items-center">
                    <h4 className="mr-1">{product.price}€</h4>
                </div>
                <div className="d-flex flex-column mt-4">
                    <Link href={`products/${product.id}`} passHref>
                        <a href="">
                            <Button className="btn-sm btn-block" variant={"info"}>Details</Button>
                        </a>
                    </Link>
                    <Button className="btn-sm mt-2" variant={"success"} onClick={() => addToCart(cartItem)}>
                        Add to Cart
                    </Button>
                </div>
            </Col>
        </Row>
    );

}

export default productListItem;