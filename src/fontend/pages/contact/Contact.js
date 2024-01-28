import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import ContactContainer from '../../view/ContactContainer'

export default function Contact() {
    useEffect(()=>{
        document.title = 'WorldCoder | Contact';
    },[]);

    return (
        <>
            <Container>
                <ContactContainer></ContactContainer>
            </Container>
        </>
    )
}
