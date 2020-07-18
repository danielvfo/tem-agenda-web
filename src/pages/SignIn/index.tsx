import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logo from '../../assets/tem-agenda-logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Tem Agenda? - Logo" />

      <form>
        <h1>Faça seu login</h1>
        <input placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
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
