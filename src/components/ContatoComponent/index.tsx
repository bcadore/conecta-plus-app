import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import * as enums from '../../utils/enums/EnumContatos';
import { remover, editar } from '../../store/reducers/contatos';
import Contato from '../../models/Contato';

type Props = Contato;

const ContatoComponent = ({
  nomeContato: nomeContatoOriginal,
  tagContato,
  phoneContato: phoneContatoOriginal,
  emailContato: emailContatoOriginal,
  id,
}: Props) => {
  const [editando, setEditando] = useState(false);
  const dispatch = useDispatch();
  const [nomeContato, setNomeContato] = useState<string>(nomeContatoOriginal);
  const [phoneContato, setPhoneContato] = useState<string>('');
  const [emailContato, setEmailContato] = useState<string>('');

  useEffect(() => {
    if (nomeContatoOriginal.length > 0) {
      setNomeContato(nomeContatoOriginal);
    }
    if (emailContatoOriginal.length > 0) {
      setEmailContato(emailContatoOriginal);
    }
    if (phoneContatoOriginal.length > 0) {
      setPhoneContato(phoneContatoOriginal);
    }
  }, [nomeContatoOriginal, phoneContatoOriginal, emailContatoOriginal]);

  function cancelarEdicao() {
    setEditando(false);
    setNomeContato(nomeContatoOriginal);
    setEmailContato(emailContatoOriginal);
    setPhoneContato(phoneContatoOriginal.toString());
  }

  return (
    <S.Card>
      <S.CardTitle>
        {editando ? (
          <input
            type="text"
            value={nomeContato}
            onChange={(e) => setNomeContato(e.target.value)}
          />
        ) : (
          <h3>{nomeContato}</h3>
        )}
      </S.CardTitle>
      <S.Tag tagContato={tagContato}>{tagContato}</S.Tag>
      <S.CardForm>
        <label htmlFor="Phone">Telefone:</label>
        <input
          type="tel"
          name="Phone"
          id="Phone"
          disabled={!editando}
          value={phoneContato}
          pattern="[0-9]*"
          onChange={(evento) => {
            const apenasNumeros = evento.target.value.replace(/\D/g, '');
            setPhoneContato(apenasNumeros);
          }}
        />

        <label htmlFor="Email">E-mail:</label>
        <input
          type="email"
          name="Email"
          id="Email"
          disabled={!editando}
          value={emailContato}
          onChange={(evento) => setEmailContato(evento.target.value)}
        />
      </S.CardForm>
      <S.CardAction>
        {editando ? (
          <>
            <S.CardButton
              onClick={() => {
                dispatch(
                  editar({
                    nomeContato,
                    tagContato,
                    phoneContato,
                    emailContato,
                    id,
                  })
                );
                setEditando(false);
              }}
            >
              Salvar
            </S.CardButton>
            <S.CancelCardButton onClick={cancelarEdicao}>
              Cancelar
            </S.CancelCardButton>
          </>
        ) : (
          <>
            <S.CardButton onClick={() => setEditando(true)}>
              Editar
            </S.CardButton>
            <S.RemoveCardButton onClick={() => dispatch(remover(id))}>
              Remover
            </S.RemoveCardButton>
          </>
        )}
      </S.CardAction>
    </S.Card>
  );
};

export default ContatoComponent;
