import ContatoComponent from '../../components/ContatoComponent';
import * as S from './styles';
import * as enums from '../../utils/enums/EnumContatos';

const contatos = [
  {
    nomeContato: 'Teste1 teste1 teste1',
    tagContato: enums.TagEnum.FAMILIA,
    telefoneContato: 48912345678,
    emailContato: 'teste1@teste.com',
  },
  {
    nomeContato: 'Teste2 teste2 teste2',
    tagContato: enums.TagEnum.AMIZADE,
    telefoneContato: 55912345678,
    emailContato: 'teste2@teste.com',
  },
  {
    nomeContato: 'Teste3 teste3 teste3',
    tagContato: enums.TagEnum.TRABALHO,
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
