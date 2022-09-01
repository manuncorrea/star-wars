import { Button, Form, Modal } from "react-bootstrap";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <>
      <Modal.Body>
        <Form>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">
          Cadastrar
        </Button>
        <Button variant="primary">
          Entre
        </Button>
      </Modal.Footer>
    </>
  )
}