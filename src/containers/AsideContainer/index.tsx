import { useDispatch, useSelector } from 'react-redux';
import FiltroComponent from '../../components/FiltroComponent';
import * as S from './styles';
import { RootReducer } from '../../store';
import { alteraTermo } from '../../store/reducers/filtros';
import * as enums from '../../utils/enums/EnumContatos'

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
          <FiltroComponent criterio="todas" legenda="Todas" />
          <FiltroComponent criterio="tag" valor={enums.TagEnum.FAMILIA} legenda="Familia" />
          <FiltroComponent criterio="tag" valor={enums.TagEnum.TRABALHO} legenda="Trabalho" />
          <FiltroComponent criterio="tag" valor={enums.TagEnum.AMIZADE} legenda="Amigos" />
          <FiltroComponent criterio="tag" valor={enums.TagEnum.OUTRO} legenda="Outros" />
        </S.Filtros>
      </div>
    </S.Aside>
  );
};

export default AsideContainer;
