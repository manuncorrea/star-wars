import { useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { BoxBorder } from "../../components/BoxBorder";

interface CharactersProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export function Characters() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [charactersData, setCharactersData] = useState<Array<CharactersProps>>(
    [] as Array<CharactersProps>
  );

  useEffect(() => {
    handleCharacters();
  }, []);

  async function handleCharacters() {
    await fetchCharacters();
  }

  async function fetchCharacters() {
    fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((data) => setCharactersData(data.results));
  }

  const handleClose = () => setIsModalVisible(false);
  const handleOpenModal = () => setIsModalVisible(true);

  return charactersData.map((character) => (
    <Container>
      <BoxBorder>
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button onClick={handleOpenModal} variant="primary">Detalhes</Button>
            </Card.Body>
          </Card>
        </>

      </BoxBorder>


      <Modal show={isModalVisible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do personagem</Modal.Title>
        </Modal.Header>
      </Modal>

    </Container>
  ));
}