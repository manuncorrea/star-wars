import { Button, Card, Container } from "react-bootstrap";
import armasImg from "../../assets/armas.jpeg"
import { BoxBorder } from "../../components/BoxBorder";

export function Weapons() {
  return (
    <Container>
      <BoxBorder>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={armasImg} />
          <Card.Body>
            <Card.Title>Armas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Detalhes</Button>
          </Card.Body>
        </Card>
      </BoxBorder>
    </Container>
  )
}