import React, { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Badge } from "react-bootstrap";
import menuItems from "../../data/menuItems";

// Componente de compras: usa os itens definidos em data/menuItems
function Purchases() {
  // Convertemos os itens do menu para um formato mais direto para compras
  const products = menuItems.map((m, idx) => ({
    id: m.id,
    title: m.title,
    price: m.price,
    image: m.image,
  }));

  const [cart, setCart] = useState({});

  function addToCart(product) {
    setCart((prev) => {
      const prevQty = prev[product.id]?.qty || 0;
      return {
        ...prev,
        [product.id]: { product, qty: prevQty + 1 },
      };
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => {
      const item = prev[productId];
      if (!item) return prev;
      const qty = item.qty - 1;
      const copy = { ...prev };
      if (qty <= 0) delete copy[productId];
      else copy[productId] = { ...item, qty };
      return copy;
    });
  }

  function clearCart() {
    setCart({});
  }

  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce((s, it) => s + it.product.price * it.qty, 0);

  return (
    <section className="shop_section" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="section_title">Loja</h2>
            <p className="section_subtitle">Escolha seus produtos e finalize a compra</p>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <Row>
              {products.map((p) => (
                <Col key={p.id} sm={12} md={6} className="mb-4">
                  <Card className="h-100">
                    <div className="overflow-hidden">
                      <Card.Img
                        variant="top"
                        src={p.image.default || p.image}
                        alt={p.title}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{p.title}</Card.Title>
                      <Card.Text className="flex-grow-1">Delicioso combo preparado especialmente.</Card.Text>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <h5 className="mb-0">R${p.price.toFixed(2).replace('.', ',')}</h5>
                        <Button variant="primary" onClick={() => addToCart(p)}>
                          Adicionar
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={4}>
            <Card>
              <Card.Header>
                Carrinho <Badge bg="secondary">{cartItems.length}</Badge>
              </Card.Header>
              <ListGroup variant="flush">
                {cartItems.length === 0 && (
                  <ListGroup.Item>Nenhum item no carrinho</ListGroup.Item>
                )}
                {cartItems.map((it) => (
                  <ListGroup.Item key={it.product.id} className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{it.product.title}</strong>
                      <div className="text-muted">{it.qty} x R${it.product.price.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <div>
                      <Button variant="light" size="sm" onClick={() => removeFromCart(it.product.id)}>-</Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <strong>Subtotal</strong>
                  <strong>R${subtotal.toFixed(2).replace('.', ',')}</strong>
                </div>
                <div className="d-grid gap-2">
                  <Button variant="success" disabled={cartItems.length === 0} onClick={() => alert('Checkout simulado!')}>
                    Finalizar Compra
                  </Button>
                  <Button variant="outline-secondary" onClick={clearCart} disabled={cartItems.length === 0}>
                    Limpar Carrinho
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Purchases;
