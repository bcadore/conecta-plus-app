import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PageTitle, MainContainer, BarraDeBusca } from '../../styles/index';
import * as S from './styles';
import * as enums from '../../utils/enums/EnumContatos';
import Contato from '../../models/Contato';
import { cadastrar } from '../../store/reducers/contatos';

const FormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [tag, setTag] = useState(enums.TagEnum.OUTRO);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const adicionarCadastro = new Contato(nome, tag, telefone, email, 9);

    dispatch(cadastrar(adicionarCadastro));
    navigate('/');
  };

  return (
    <MainContainer>
      <PageTitle>Cadastrar Contato</PageTitle>
      <S.Form onSubmit={cadastrarContato}>
        <S.FormLabel htmlFor="NomeContato">Nome:</S.FormLabel>
        <BarraDeBusca
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          id="NomeContato"
          name="NomeContato"
          placeholder="Informe o nome do contato"
        />

        <S.FormLabel htmlFor="TelContato">Telefone:</S.FormLabel>
        <BarraDeBusca
          type="tel"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          id="TelContato"
          name="TelContato"
          placeholder="Informe o telefone do contato"
        />

        <S.FormLabel htmlFor="EmailContato">Email:</S.FormLabel>
        <BarraDeBusca
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          id="EmailContato"
          name="EmailContato"
          placeholder="Informe o email do contato"
        />

        <div>
          <S.FormLabel htmlFor="contatoOpt">Opções de Contato:</S.FormLabel>
          {Object.values(enums.TagEnum).map((tagContato) => (
            <div key={tagContato}>
              <S.InputRadio
                value={tagContato}
                type="radio"
                name="tagContato"
                id={tagContato}
                onChange={(evento) =>
                  setTag(evento.target.value as enums.TagEnum)
                }
                defaultChecked={tagContato === enums.TagEnum.OUTRO}
              />
              <S.LabelRadio htmlFor={tagContato}>{tagContato}</S.LabelRadio>
            </div>
          ))}
        </div>
        <S.BtnForm type="submit">Cadastrar Contato</S.BtnForm>
      </S.Form>
    </MainContainer>
  );
};

export default FormContainer;
