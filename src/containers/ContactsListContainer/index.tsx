import ContatoComponent from '../../components/ContatoComponent';
import * as S from './styles';

const ContactsListContainer = () => (
  <S.Main>
    <p>Teste</p>
    <ul>
      <li>
        <ContatoComponent />
      </li>
      <li>
        <ContatoComponent />
      </li>
      <li>
        <ContatoComponent />
      </li>
    </ul>
  </S.Main>
);

export default ContactsListContainer;
