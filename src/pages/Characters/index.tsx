import { useCallback, useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { BoxBorder } from "../../components/BoxBorder";
import { CharactersProps } from "../../utils/types";
import { api } from '../../services/api';

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
  };

  const fetchCharacters = useCallback(async () => {
    try {
      const {data} = await api.get(`/people`);
      setCharactersData(data.results)
    } catch (error) {
      console.error(error)
    }
  }, []);

  const handleClose = () => setIsModalVisible(false);
  const handleOpenModal = () => setIsModalVisible(true);

  return (
    <Container>
      <BoxBorder>
        {
          charactersData.map((characters) => {
            return (
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{characters.name}</Card.Title>
                    <Button onClick={handleOpenModal} variant="primary">Detalhes</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }

        <Modal show={isModalVisible} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalhes</Modal.Title>
          </Modal.Header>
        </Modal>
      </BoxBorder>
    </Container>
  );
}