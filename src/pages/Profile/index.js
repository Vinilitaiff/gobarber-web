import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereco de email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Seu senha atual"
        />
        <Input name="password" type="password" placeholder="Seu senha nova" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmacao de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="submit">Sair do GoBarber</button>
    </Container>
  );
}
