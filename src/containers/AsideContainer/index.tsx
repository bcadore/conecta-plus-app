import { useDispatch, useSelector } from 'react-redux';
import FiltroComponent from '../../components/FiltroComponent';
import * as S from './styles';
import { RootReducer } from '../../store';
import { alteraTermo } from '../../store/reducers/filtros';

const AsideContainer = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);
  
  return (
    <S.Aside>
      <div>
        <S.BarraDeBusca
          type="text"
          name=""
          id=""
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroComponent legenda="Familia" contador={5} ativo />
          <FiltroComponent legenda="Trabalho" contador={4} />
          <FiltroComponent legenda="Amigos" contador={9} />
          <FiltroComponent legenda="Outros" contador={2} />
        </S.Filtros>
      </div>
    </S.Aside>
  );
};

export default AsideContainer;
