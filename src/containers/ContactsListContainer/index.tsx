import { useSelector } from 'react-redux';
import ContatoComponent from '../../components/ContatoComponent';
import * as S from './styles';
import { RootReducer } from '../../store';

const ContactsListContainer = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);

  return (
    <S.Main>
      <p>Teste</p>
      <ul>
        {itens.map((c) => (
          <li key={c.nomeContato}>
            <ContatoComponent
              nomeContato={c.nomeContato}
              tagContato={c.tagContato}
              phoneContato={c.phoneContato}
              emailContato={c.emailContato}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </S.Main>
  );
};

export default ContactsListContainer;
