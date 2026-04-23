import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger1 from "../../assets/menu/burger-1.png";
import Burger2 from "../../assets/menu/burger-2.png";
import Burger3 from "../../assets/menu/burger-3.png";
import Burger4 from "../../assets/menu/burger-4.png";
import Burger5 from "../../assets/menu/burger-5.png";
import Burger6 from "../../assets/menu/burger-6.png";
import Burger7 from "../../assets/menu/burger-7.png";
import Burger8 from "../../assets/menu/burger-8.png";
import Cards from "../../components/Layouts/Cards";

const mockData = [
  {
    id: "0001",
    image: Burger1,
    title: "Burger King",
    paragraph: "Hambúrguer artesanal, Bacon, Cebola roxa, Queijo, Alface.",
    rating: 5,
    price: 34.90,
  },
  {
    id: "0002",
    image: Burger2,
    title: "Bacon Master",
    paragraph: "Hambúrguer artesanal, Bacon Duplo, Queijo, Alface.",
    rating: 4.5,
    price: 38.50,
  },
  {
    id: "0003",
    image: Burger3,
    title: "The Chicken",
    paragraph: "Queijo cheddar, alface, tomate, cebola roxa, hamburger de frango.",
    rating: 4.5,
    price: 42.00,
  },
  {
    id: "0004",
    image: Burger4,
    title: "Burger Doritos",
    paragraph: "Doritos, Queijo Triplo, Hambúrguer 240g, Cebola roxa, Alface.",
    rating: 4,
    price: 36.90,
  },
  {
    id: "0005",
    image: Burger5,
    title: "Simple",
    paragraph: "Hambúrguer 240g, Queijo.",
    rating: 5,
    price: 45.90,
  },
  {
    id: "0006",
    image: Burger6,
    title: "Combo Coke",
    paragraph: "Hambúrguer 240g, Queijo, Batata frita, Cola-cola.",
    rating: 4,
    price: 32.00,
  },
  {
    id: "0007",
    image: Burger7,
    title: "Combo Guaraná",
    paragraph: "Hambúrguer 240g, Queijo, Batata frita, Guaraná.",
    rating: 5,
    price: 39.90,
  },
  {
    id: "0008",
    image: Burger8,
    title: "X Hot Burger",
    paragraph: "Hambúrguer artesanal, Queijo duplo, Pimenta Carolina Reaper e Trinidad Scorpion.",
    rating: 4,
    price: 28.50,
  },
];

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
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
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
