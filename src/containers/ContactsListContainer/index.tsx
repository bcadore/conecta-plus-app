import { useSelector } from 'react-redux';
import ContatoComponent from '../../components/ContatoComponent';
import * as S from './styles';
import { RootReducer } from '../../store';

const ContactsListContainer = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  const filtraTarefas = () => {
    return itens.filter((item) => item.nomeContato.toLowerCase().search(termo.toLocaleLowerCase()) >= 0);
  };

  return (
    <S.Main>
      <p>2 contatos filtrados como: {termo}.</p>
      <ul>
        {filtraTarefas().map((c) => (
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
