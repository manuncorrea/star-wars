import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { BoxBorder } from "../../components/BoxBorder";
import { SpaceshipProps } from "../../utils/types";
import { api } from "../../services/api";

export function Spaceships() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [spaceshipData, setSpaceshipData] = useState<Array<SpaceshipProps>>(
    [] as Array<SpaceshipProps>
  );

  useEffect(() => {
    handleSpaceship();
  });

  async function handleSpaceship() {
    await fetchSpaceship();
  };

  async function fetchSpaceship() {
    try {
      const {data} = await api.get(`/starships`);
      setSpaceshipData(data.results)
    } catch (error) {
      console.error(error)
    }
  };

  console.log(spaceshipData)
  
  const handleClose = () => setIsModalVisible(false);
  const handleOpenModal = () => setIsModalVisible(true);

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
                    <Button variant="primary">Detalhes</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }
      </BoxBorder>
    </Container>
  );
}