import FiltroComponent from '../../components/FiltroComponent';
import * as S from './styles';

const AsideContainer = () => (
  <S.Aside>
    <div>
      <S.BarraDeBusca type="text" name="" id="" placeholder="Buscar" />
      <S.Filtros>
        <FiltroComponent />
        <FiltroComponent />
        <FiltroComponent />
        <FiltroComponent />
        <FiltroComponent />
        <FiltroComponent ativo />
      </S.Filtros>
    </div>
  </S.Aside>
);

export default AsideContainer;
