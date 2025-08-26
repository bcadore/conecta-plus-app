import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { alteraFiltro } from '../../store/reducers/filtros';
import * as enums from '../../utils/enums/EnumContatos';
import { RootReducer } from '../../store';

export type Props = {
  legenda: string;
  criterio: 'todas' | 'tag';
  valor?: enums.TagEnum;
};

const FiltroComponent = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch();
  const { filtro, contatos } = useSelector((state: RootReducer) => state);

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio;
    const mesmoValor = filtro.valor === valor;

    return mesmoCriterio && mesmoValor;
  };

  const contadorTarefas = () => {
    if (criterio === 'todas') return contatos.itens.length;
    if (criterio === 'tag') {
      return contatos.itens.filter((item) => item.tagContato === valor).length;
    }
  };

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor,
      })
    );
  };

  const ativo = verificaAtivo();
  const contador = contadorTarefas();

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  );
};

export default FiltroComponent;
