import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu Email" />
        <input type="password" placeholder="Sua Senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho conta</Link>
      </form>
    </>
  );
}
