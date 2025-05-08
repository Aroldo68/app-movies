import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { Form } from "react-router-dom";

function VideoCadastre() {
    return (
        <>
            <Header />
            <Container>
                <Form />
            </Container>
            <Footer />
        </>
    );
}

export default VideoCadastre;