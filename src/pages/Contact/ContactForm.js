import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section className="about_story_section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h2>FALE CONOSCO</h2>
              <p className="para">
                Tem alguma dúvida ou sugestão? Preencha o formulário abaixo
                e nossa equipe entrará em contato com você.
              </p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="seu@email.com" required />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={4} 
                      placeholder="Sua mensagem..." 
                      required 
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} className="text-center mt-4">
                  <Button variant="danger" type="submit" className="px-5 py-2 rounded-0">
                    Enviar Mensagem
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
