import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PageTitle, MainContainer, BarraDeBusca } from '../../styles/index';
import * as S from './styles';
import * as enums from '../../utils/enums/EnumContatos';
import { cadastrar } from '../../store/reducers/contatos';

const FormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nomeContato, setNomeContato] = useState('');
  const [phoneContato, setPhoneContato] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [tagContato, setTagContato] = useState(enums.TagEnum.OUTRO);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    dispatch(
      cadastrar({
        nomeContato,
        tagContato,
        phoneContato,
        emailContato,
      })
    );
    navigate('/');
  };

  return (
    <MainContainer>
      <PageTitle>Cadastrar Contato</PageTitle>
      <S.Form onSubmit={cadastrarContato}>
        <S.FormLabel htmlFor="NomeContato">Nome:</S.FormLabel>
        <BarraDeBusca
          type="text"
          value={nomeContato}
          onChange={(evento) => setNomeContato(evento.target.value)}
          id="NomeContato"
          name="NomeContato"
          placeholder="Informe o nome do contato"
        />

        <S.FormLabel htmlFor="TelContato">Telefone:</S.FormLabel>
        <BarraDeBusca
          type="tel"
          value={phoneContato}
          onChange={(evento) => setPhoneContato(evento.target.value)}
          id="TelContato"
          name="TelContato"
          placeholder="Informe o telefone do contato"
        />

        <S.FormLabel htmlFor="EmailContato">Email:</S.FormLabel>
        <BarraDeBusca
          type="email"
          value={emailContato}
          onChange={(evento) => setEmailContato(evento.target.value)}
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
                  setTagContato(evento.target.value as enums.TagEnum)
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
