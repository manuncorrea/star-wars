import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { CharactersProps } from "../../../utils/types";

export function DetailsCharacters() {
  const { id } = useParams()

  const [detalisCharacters, setDetalisCharacters] = useState<Array<CharactersProps>>(
    [] as Array<CharactersProps>
  );

  useEffect(() => {
    handlefetchCharactersDetalis()
  }, []);

  async function handlefetchCharactersDetalis() {
    await fetchCharactersDetalis();
  };

  async function fetchCharactersDetalis() {
    try {
      const {data} = await api.get(`/people/${id}`);
      setDetalisCharacters(data.results)
    } catch (error) {
      console.error(error)
    }
  };

  console.log(detalisCharacters)

  return (
    <div>
     <h1>teste</h1>
    </div>
  )
}