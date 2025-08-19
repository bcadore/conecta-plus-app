import { useState } from 'react';
import * as S from './styles';

type Props = {
  nomeContato: string;
  tagContato: string;
  phoneContato: number;
  emailContato: string;
};

const ContatoComponent = ({ nomeContato, tagContato, phoneContato, emailContato }: Props) => {
  const [editando, setEditando] = useState(false);

  return (
    <S.Card>
      <S.CardTitle>{nomeContato}</S.CardTitle>
      <S.Tag>{tagContato}</S.Tag>
      <S.CardForm>
        <label htmlFor="Phone">Telefone:</label>
        <input type="tel" name="Phone" id="Phone" value={phoneContato} />

        <label htmlFor="Email">E-mail:</label>
        <input type="email" name="Email" id="Email" value={emailContato} />
      </S.CardForm>
      <S.CardAction>
        {editando ? (
          <>
            <S.CardButton>Salvar</S.CardButton>
            <S.CardButton onClick={() => setEditando(false)}>
              Cancelar
            </S.CardButton>
          </>
        ) : (
          <>
            <S.CardButton onClick={() => setEditando(true)}>
              Editar
            </S.CardButton>
            <S.CardButton>Remover</S.CardButton>
          </>
        )}
      </S.CardAction>
    </S.Card>
  );
};

export default ContatoComponent;
