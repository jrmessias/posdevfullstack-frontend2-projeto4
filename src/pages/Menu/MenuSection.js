import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Layouts/Cards";
import menuItems from "../../data/menuItems";

const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function MenuSection() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>NOSSOS BURGERS INSANOS</h2>
            <p className="para">
              Explodimos o limite do sabor com combinações ousadas e ingredientes 
              fora do comum. Prepare-se para uma experiência gastronômica intensa 
              em cada mordida.
            </p>
          </Col>
        </Row>
        <Row>
          {menuItems.map((cardData) => (
            <Cards
              key={cardData.id}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default MenuSection;
