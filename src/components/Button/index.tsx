import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export function Button({ loading, children, ...rest}: ButtonProps) {
  return (
    <Container type='button' {...rest}>
       {loading ? 'Carregando...' : children}
    </Container> 
  )
  
}