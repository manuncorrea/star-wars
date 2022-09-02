import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Button, Container } from 'react-bootstrap';
import { Input } from '../../components/Input';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormDataProps {
  email: string;
  password: string;
}

export function SignIn() {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  
  const navigate = useNavigate();

  const handleSubmit = useCallback(async(data: SignInFormDataProps) => {
    try {
      formRef.current?.setErrors({}); 
      const schema = Yup.object().shape({
       email: Yup.string().required('E-mail obrigatório').email('Digite um -email válido'),
       password: Yup.string().required('Senha obrigatoria')
      });
      console.log('===' ,schema)
      await schema.validate(data, {
       abortEarly: false, 
      });
 
      await signIn({
       email: data.email,
       password: data.password,
      });
 
      navigate('/nave-espacial');
    } catch (error) {
      if(error instanceof Yup.ValidationError) {

        const errors = getValidationErrors(error);
  
        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, [signIn]);
  
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Senha' />

        <Button variant='primary' >Entrar</Button>
      </Form>
    </Container>
  )
}