import { useCallback, useEffect, useState } from 'react';
import { Button, Card, Container, Modal } from 'react-bootstrap';
import { BoxBorder } from '../../components/BoxBorder';
import { CharactersProps } from '../../utils/types';
import { api } from '../../services/api';
import LoadingIcons from 'react-loading-icons'

export function Characters() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedCharacterData, setSelectedCharacterData] = useState<CharactersProps>();
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
      const { data } = await api.get(`/people`);
      setCharactersData(data.results)
    } catch (error) {
      console.error(error)
    }
  }, []);

  const fetchCharactersDetalies = async (url: string) => {
    setIsLoading(true);
    try {
      const { data } = await api.get(url);
      setSelectedCharacterData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => setIsModalVisible(false);
  const handleOpenModal = (url: string) => {
    fetchCharactersDetalies(url);
    setIsModalVisible(true);
  };

  return (
    <Container>
      <BoxBorder>
        {isLoading ? (<LoadingIcons.Bars />) : (
          charactersData.map((characters) => {
            return (
              <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                <Card style={{ width: '18rem', background: '#0e0c1a' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#ffffff8c', fontWeight: 'bold', fontFamily: 'Inter' }}>{characters.name}</Card.Title>
                    <Button onClick={() => handleOpenModal(characters.url)} variant='warning'>Detalhes</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        )}

        <Modal show={isModalVisible} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalhes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLoading ? (<LoadingIcons.Bars />) : (
              <div>
                <div className='d-flex flex-row'>
                  <h5>Nome:</h5>
                  <span>{selectedCharacterData?.name}</span>
                </div>
                <div className='d-flex flex-row'>
                  <h5>Cor do cabelo: </h5>
                  <span>
                    {selectedCharacterData?.hair_color ?
                      selectedCharacterData?.hair_color : ''}
                  </span>
                </div>
                <div className='d-flex flex-row'>
                  <h5>Cor da pele: </h5>
                  <span>
                    {selectedCharacterData?.skin_color ?
                      selectedCharacterData?.skin_color : ''}
                  </span>
                </div>
                <div className='d-flex flex-row'>
                  <h5>Sexo: </h5>
                  <span>

                    {selectedCharacterData?.gender ?
                      selectedCharacterData?.gender : ''}
                  </span>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </BoxBorder>
    </Container>
  );
};