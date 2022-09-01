import { Button, Card, Container } from "react-bootstrap";
import imageNave from "../../assets/nave-especial.jpeg";
import { BoxBorder } from "../../components/BoxBorder";

export function Spaceships() {
  return (
    <Container>
      <BoxBorder>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageNave} />
          <Card.Body>
            <Card.Title>Nave Espacial</Card.Title>
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