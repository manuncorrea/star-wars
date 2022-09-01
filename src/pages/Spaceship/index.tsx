import { useCallback, useEffect, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import { BoxBorder } from "../../components/BoxBorder";
import { SpaceshipProps } from "../../utils/types";
import { api } from "../../services/api";

import styles  from './Spaceship.module.css';

export function Spaceships() {
  const teste = "verde"
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectSpaceshipData, setSelectSpaceshipData] = useState<SpaceshipProps>();
  const [spaceshipData, setSpaceshipData] = useState<Array<SpaceshipProps>>(
    [] as Array<SpaceshipProps>
  );
  useEffect(() => {
    handleSpaceship();
  });

  async function handleSpaceship() {
    await fetchSpaceship();
  };

  const fetchSpaceship = useCallback(async () => {
    try {
      const { data } = await api.get(`/starships`);
      setSpaceshipData(data.results)
    } catch (error) {
      console.error(error)
    }
  }, []);

  const fetchSpaceshipDetalies = async (url: string) => {
    setIsLoading(true);
    try {
      const { data } = await api.get(url);
      setSelectSpaceshipData(data);
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }

  };

  const handleClose = () => setIsModalVisible(false);
  const handleOpenModal = (url: string) => {
    fetchSpaceshipDetalies(url);
    setIsModalVisible(true);
  };

  return (
    <Container>
      <BoxBorder>
        {
          spaceshipData.map((spaceship) => {
            return (
              <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{spaceship.name}</Card.Title>
                    <Button  onClick={() => handleOpenModal(spaceship.url)} variant="primary" disabled>Detalhes</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }

        <Modal  show={isModalVisible} onHide={handleClose}>
          <Modal.Header className={styles.modal} closeButton>
            <Modal.Title>Detalhes</Modal.Title>
          </Modal.Header>
          <Modal.Body className={styles.modalBody}>
            {isLoading ? ("loading") : (
              <div>
                <div className="d-flex flex-row">
                  <h5>Modelo:</h5>
                  <span> {selectSpaceshipData?.model} </span>
                </div>

                <div  className="d-flex flex-row">
                  <h5>Fabricante:</h5>
                  <span>{selectSpaceshipData?.cost_in_credits}</span>
                </div>

                <div  className="d-flex flex-row">
                  <h5>Tamanho:</h5>
                  <span>{selectSpaceshipData?.length}m</span>
                </div>

                <div  className="d-flex flex-row">
                  <h5>Velocidade:</h5>
                  <span>{selectSpaceshipData?.max_atmosphering_speed}km/h</span>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </BoxBorder>
    </Container>
  );
}