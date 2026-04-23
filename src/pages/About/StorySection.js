import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Place1 from "../../assets/about/place-1.png";
import Place2 from "../../assets/about/place-2.png";
import Team1 from "../../assets/about/team-1.png";
import Team2 from "../../assets/about/team-2.png";
import Team3 from "../../assets/about/team-3.png";

const imageSlots = [
  {
    category: "Local",
    title: "Fachada e salão",
    fileName: "src/assets/about/place-1.png",
    src: Place1,
  },
  {
    category: "Local",
    title: "Cozinha e preparo",
    fileName: "src/assets/about/place-2.png",
    src: Place2,
  },
  {
    category: "Equipe",
    title: "Time de atendimento",
    fileName: "src/assets/about/team-1.png",
    src: Team1,
  },
  {
    category: "Equipe",
    title: "Chapa e finalização",
    fileName: "src/assets/about/team-2.png",
    src: Team2,
  },
  {
    category: "Equipe",
    title: "Equipe completa",
    fileName: "src/assets/about/team-3.png",
    src: Team3,
  },
];

function StorySection() {
  return (
    <section className="about_story_section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="about_story_content">
              <span className="about_story_eyebrow">Nossa História</span>
              <h2>Uma hamburgueria criada para servir sabor, memória e encontro</h2>
              <p>
                A nossa história começou com encontros entre amigos, receitas
                testadas em casa e a vontade de criar um lugar onde cada pedido
                tivesse gosto de experiência bem vivida. Antes de abrir as
                portas, passamos meses ajustando blends, molhos e combinações
                até chegar em um cardápio que representasse a nossa identidade.
              </p>
              <p>
                Com o tempo, a hamburgueria cresceu sem perder o cuidado
                artesanal. O espaço foi pensado para receber famílias, casais e
                grupos de amigos com o mesmo acolhimento de uma cozinha que ama
                servir. Cada detalhe do salão, do atendimento e da finalização
                dos burgers faz parte da experiência que queremos entregar.
              </p>
              <p>
                Hoje seguimos com a mesma proposta do primeiro dia: ingredientes
                selecionados, preparo consistente e uma equipe comprometida em
                transformar uma refeição simples em um momento marcante. Abaixo,
                você pode substituir os espaços reservados pelas fotos reais do
                local e do time.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              {imageSlots.map((slot) => (
                <Col md={6} key={slot.fileName}>
                  <div className="about_story_card">
                    {slot.src ? (
                      <img
                        src={slot.src}
                        alt={slot.title}
                        className="img-fluid about_story_image"
                      />
                    ) : (
                      <div className="about_story_placeholder">
                        <span>{slot.category}</span>
                        <strong>{slot.title}</strong>
                      </div>
                    )}
                    <div className="about_story_caption">
                      <p>{slot.title}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default StorySection;
