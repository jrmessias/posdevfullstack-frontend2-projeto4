import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Página de listagem de posts do blog — conteúdo estático inicial
function Blog() {
  const posts = [
    {
      id: 1,
      title: "Como escolher o hambúrguer perfeito",
      excerpt:
        "Dicas práticas para escolher carne, ponto e acompanhamentos para um hambúrguer suculento.",
      image: require("../../assets/blog/reviews.jpg"),
      author: "Ricardo Santos",
      date: "20 de Abril, 2026",
    },
    {
      id: 2,
      title: "Tendências em molhos artesanais",
      excerpt:
        "Conheça os molhos que estão fazendo sucesso e aprenda uma receita simples para testar em casa.",
      image: require("../../assets/blog/review-author-1.jpg"),
      author: "Amanda Oliveira",
      date: "12 de Abril, 2026",
    },
    {
      id: 3,
      title: "Opções vegetarianas que surpreendem",
      excerpt:
        "Alternativas vegetais deliciosas e nutritivas que não perdem em sabor para as versões tradicionais.",
      image: require("../../assets/blog/review-author-2.jpg"),
      author: "João Ferreira",
      date: "05 de Abril, 2026",
    },
  ];

  return (
    <Layout>
      {/* Classe adicional 'blog_listing' garante estilo específico somente aqui */}
      <section className="blog_section blog_listing">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="section_title">Nosso Blog</h2>
              <p className="section_subtitle">Confira as últimas publicações e novidades</p>
            </Col>
          </Row>

          <Row>
            {posts.map((post) => (
              <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="h-100">
                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={post.image.default || post.image}
                      alt={post.title}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{post.excerpt}</Card.Text>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted">{post.author} — {post.date}</small>
                      <Button variant="primary" size="sm" href="#">
                        Ler mais
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Blog;
