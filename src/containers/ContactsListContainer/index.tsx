import { useSelector } from 'react-redux';
import ContatoComponent from '../../components/ContatoComponent';
import * as S from '../../styles';
import { CardsList } from './styles';
import { RootReducer } from '../../store';

const ContactsListContainer = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraContatos = () => {
    let contatosFiltrados = itens;

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nomeContato.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      );

      if (criterio === 'tag') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tagContato === valor
        );
      }

      return contatosFiltrados;
    } else {
      return itens;
    }
  };

  const exibeResultado = (quantidade: number) => {
    let mensagem = '';
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : '';

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "Todas" ${complemento}`;
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${valor}`}" ${complemento}`;
    }

    return mensagem;
  };
  const contatos = filtraContatos();
  const mensagem = exibeResultado(contatos.length);

  return (
    <S.MainContainer>
      <S.PageTitle as={'p'}>{mensagem}</S.PageTitle>
      <CardsList>
        {contatos.map((c) => (
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
      </CardsList>
    </S.MainContainer>
  );
};

export default ContactsListContainer;
