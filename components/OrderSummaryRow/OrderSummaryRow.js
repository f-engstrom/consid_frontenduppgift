import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";


const orderSummaryRow = ({item})=>{
    
    
    const calculateTotal = ()=>{
        
        return item.price * parseInt(item.quantity);
        
    }
    
    return(
        <Row className=" justify-content-between mt-2">
            <Col md={7} className="col-auto ">
                <div className="media flex-column flex-sm-row"><Image fluid
                                                                    src={item.mainImage.url}
                                                                    width="62" height="62"/>
                    <div className="media-body my-auto">
                        <Row >
                            <Col className="col-auto">
                                <p className="mb-0"><b>{'  '}{item.name}</b></p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <div className=" pl-0 flex-sm-col col-auto my-auto">
                <p className="boxed-1">{item.quantity}x</p>
            </div>
            <div className=" pl-0 flex-sm-col col-auto my-auto ">
                <p><b>{calculateTotal()} €</b></p>
            </div>
        </Row>
        
    )
    
    
}

export default orderSummaryRow;