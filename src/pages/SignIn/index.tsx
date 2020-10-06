import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/tem-agenda-logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Tem Agenda? - Logo" />

      <form>
        <h1>Faça seu login</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot-password">Esqueci minha senha</a>
      </form>

      <a href="sign-up">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
