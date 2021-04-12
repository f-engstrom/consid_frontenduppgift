import PageHeader from "../PageHeader/PageHeader";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const layout = (props) => {

    console.log("layoutprops", props)

    return (

        <div>
            <PageHeader pages={props.pages}/>

            <Container fluid className='mt-5'>
                <Row>
                    <Col>

                        {props.children}

                    </Col>
                </Row>
            </Container>
        </div>


    )


}

export default layout;