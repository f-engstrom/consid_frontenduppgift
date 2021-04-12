import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const orderSummaryRow = ({item})=>{
    
    
    const calculateTotal = ()=>{
        
        return item.price * parseInt(item.quantity);
        
    }
    
    return(
        <Row class="row justify-content-between">
            <Col class="col-auto col-md-7">
                <div className="media flex-column flex-sm-row"><img className=" img-fluid"
                                                                    src={item.mainImage.url}
                                                                    width="62" height="62"/>
                    <div className="media-body my-auto">
                        <div className="row ">
                            <div className="col-auto">
                                <p className="mb-0"><b>{item.name}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <div className=" pl-0 flex-sm-col col-auto my-auto">
                <p className="boxed-1">{item.quantity}</p>
            </div>
            <div className=" pl-0 flex-sm-col col-auto my-auto ">
                <p><b>{calculateTotal()} €</b></p>
            </div>
        </Row>
        
    )
    
    
}

export default orderSummaryRow;