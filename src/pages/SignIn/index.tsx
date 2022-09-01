import { useCallback, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { Input } from "../../components/Input";
import { Form } from '@unform/web';
import { FormHandles } from "@unform/core";

interface SignInFormDataProps {
  email: string;
  password: string;
}

export function SignIn() {
  const formeRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async(data: SignInFormDataProps) => {
    try {
    
    } catch (error) {
      
    }
  }, []);
  
  return (
    <>
      <Modal.Body>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form ref={formeRef} onSubmit={handleSubmit}>
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