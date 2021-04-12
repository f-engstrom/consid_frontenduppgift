import PageHeader from "../PageHeader/PageHeader";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const layout = (props) => {

    console.log("layoutprops", props)

    return (

        <Container fluid>
            <Row>
                <Col>
                    <PageHeader pages={props.pages}/>

                    {props.children}

                </Col>
            </Row>
        </Container>
     
    )


}

export default layout;