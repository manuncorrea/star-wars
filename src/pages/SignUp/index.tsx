import { Button, Form, Modal } from "react-bootstrap";
import { Input } from "../../components/Input";

export function SignUp() {
  return (
    <>
      <Modal.Body>
        <Form>
          <Input type="name" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">
          Cadastrar
        </Button>
      </Modal.Footer>
    </>
  )
}