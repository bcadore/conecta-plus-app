import ContatoComponent from '../../components/ContatoComponent';
import * as S from './styles';

const contatos = [
  {
    nomeContato: 'Teste1 teste1 teste1',
    tagContato: 'Familia',
    telefoneContato: 48912345678,
    emailContato: 'teste1@teste.com',
  },
  {
    nomeContato: 'Teste2 teste2 teste2',
    tagContato: 'Amizade',
    telefoneContato: 55912345678,
    emailContato: 'teste2@teste.com',
  },
  {
    nomeContato: 'Teste3 teste3 teste3',
    tagContato: 'Trabalho',
    telefoneContato: 51912345678,
    emailContato: 'teste3@teste.com',
  },
];

const ContactsListContainer = () => (
  <S.Main>
    <p>Teste</p>
    <ul>
      {contatos.map((c) => (
        <li key={c.nomeContato}>
          <ContatoComponent
            nomeContato={c.nomeContato}
            tagContato={c.tagContato}
            phoneContato={c.telefoneContato}
            emailContato={c.emailContato}
          />
        </li>
      ))}
    </ul>
  </S.Main>
);

export default ContactsListContainer;
