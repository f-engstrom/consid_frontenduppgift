import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {StructuredText} from "react-datocms";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const productListItem = ({product}) => {


    const description = product.description.value.document.children[0].children[0].value;

    console.log("desc", description)

    return (


        <Row className='mt-2 border rounded'>
            <Col md={3}><Image style={{maxHeight: 171 + "px", maxWidth: 180 + "px"}} src={product.mainImage.url}
                               rounded/></Col>
            <Col md={6}>
                <h5>{product.name}</h5>
                <p className="text-justify text-truncate para mb-0">
                    {description}
                </p>

            </Col>
            <Col md={3} className="align-items-center align-content-center border-left mt-1">
                <div class="d-flex flex-row align-items-center">
                    <h4 class="mr-1">{product.price}€</h4>
                </div>
                <div class="d-flex flex-column mt-4">
                    <Link href={`products/${product.id}`}><Button>Details</Button></Link>
                </div>
            </Col>
        </Row>
    );

}

export default productListItem;