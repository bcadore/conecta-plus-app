import * as S from './styles';

const ContatoComponent = () => (
  <S.Card>
    <S.CardTitle>Bernardo Cadore Ramires</S.CardTitle>
    <S.Tag>Família</S.Tag >
    <S.CardForm>
        <label htmlFor="Phone">Telefone:</label>
        <input type="tel" name="Phone" id="Phone" />

        <label htmlFor="Email">E-mail:</label>
        <input type="email" name="Email" id="Email" />
    </S.CardForm>
    <S.CardAction>
      <S.CardButton>Editar</S.CardButton>
      <S.CardButton>Remover</S.CardButton>
    </S.CardAction>
  </S.Card>
);

export default ContatoComponent;
