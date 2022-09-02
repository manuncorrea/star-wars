import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export function Logout() {
  //@ts-ignore
  const { signout } = useAuth();
  const navigate = useNavigate();
  
  return(
    <Button onClick={() => [signout(), navigate('/')]} variant="outline-danger">Sair</Button>
  )
}