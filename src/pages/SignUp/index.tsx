import { useState } from "react";
import Input from "../../components/Input";
import { Container, Content, Label, LabelError, LabelSignup, Strong } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button } from "../../components/Button";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //@ts-ignore
  const { signup } = useAuth();

  const handleSignup = () => {
    //@ts-ignore
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/login");
  };
  return (
    <Container>
      <Label>Cadastra-se</Label>
      <Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e: any) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e: any) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e: any) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button onClick={handleSignup} >Cadastrar</Button>
        <LabelSignup>
          Já tem uma conta?
          <Strong>
            <Link to="/login">&nbsp;Entrar</Link>
          </Strong>
        </LabelSignup>
      </Content>
    </Container>
  );
};
