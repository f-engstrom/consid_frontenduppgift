import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "next/head";

const confirmation = ()=>{
    
    return (
        
        <Container>

            <Head>
                <title>Thank you!</title>
                <link rel="icon" href="https://consid.se/wp-content/uploads/2019/12/Icon-white.svg"/>
            </Head>            
            <Row>
                <Col>
                    <h1 style={{textAlign :"center"}}>Thank you for shopping!</h1>
                </Col>
            </Row>
            
        </Container>
        
    )
    
}

export default confirmation;