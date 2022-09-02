import { Button, Container, Form } from 'react-bootstrap';
import { Input } from '../../components/Input';

export function SignUp() {
  return (
    <Container>
      <div className="row justify-content-center align-item-center vh-100">
        <div className='col-auto row-auto'>
          <Form>
            <Input type='name' placeholder='Nome' />
            <Input type='email' placeholder='E-mail' />
            <Input type='password' placeholder='Senha' />
            <Button variant='primary'>
              Cadastrar
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  )
}