import  { useState } from "react";
import Input from "../../components/Input";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { Container, Content, Label, LabelError, LabelSignup, Strong } from "./styles";

export function SignIn() {

   //@ts-ignore
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    //@ts-ignore
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/nave-espacial");
  };

  return (
    <Container>
      <Label>Faça seu login</Label>
      <Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e: any) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e: any) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button  onClick={handleLogin} >Entrar</Button>
        <LabelSignup>
          Não tem uma conta?
          <Strong>
            <Link to="/cadastrar">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSignup>
      </Content>
    </Container>
  );
};

