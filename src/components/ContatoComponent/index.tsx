import { useState } from 'react';
import * as S from './styles';
import * as enums from '../../utils/enums/EnumContatos';

type Props = {
  nomeContato: string;
  tagContato: enums.TagEnum;
  phoneContato: number;
  emailContato: string;
};

const ContatoComponent = ({
  nomeContato,
  tagContato,
  phoneContato,
  emailContato,
}: Props) => {
  const [editando, setEditando] = useState(false);

  return (
    <S.Card>
      <S.CardTitle>{nomeContato}</S.CardTitle>
      <S.Tag tagContato={tagContato}>{tagContato}</S.Tag>
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
            <S.CancelCardButton onClick={() => setEditando(false)}>
              Cancelar
            </S.CancelCardButton>
          </>
        ) : (
          <>
            <S.CardButton onClick={() => setEditando(true)}>
              Editar
            </S.CardButton>
            <S.RemoveCardButton>Remover</S.RemoveCardButton>
          </>
        )}
      </S.CardAction>
    </S.Card>
  );
};

export default ContatoComponent;
