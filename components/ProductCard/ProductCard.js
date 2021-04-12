import Link from "next/link";
import Col from "react-bootstrap/Col";

const productCard = ({product}) => {

    console.log("product", product);


    return (

     
        
        <Col>

            <div className="p-4 bg-white">
                 <div className="d-flex flex-column">
                 <div><img className="img-fluid img-responsive" src={product.mainImage.url} width=""
                                      height="220"/></div>
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <Link href={`products/${product.id}`} passHref><h5><a style={{color:"black"}}
                                        href={`products/${product.id}`} >{product.name}</a></h5></Link>

                                    <h6>{product.price}€</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
        </Col>

    )
}

export default productCard;