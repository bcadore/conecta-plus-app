import { useSelector } from 'react-redux';
import ContatoComponent from '../../components/ContatoComponent';
import * as S from './styles';
import { RootReducer } from '../../store';

const ContactsListContainer = () => {
  const { contatos } = useSelector((state: RootReducer) => state);

  return (
    <S.Main>
      <p>Teste</p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nomeContato}>
            <ContatoComponent
              nomeContato={c.nomeContato}
              tagContato={c.tagContato}
              phoneContato={c.phoneContato}
              emailContato={c.emailContato}
            />
          </li>
        ))}
      </ul>
    </S.Main>
  );
};

export default ContactsListContainer;
