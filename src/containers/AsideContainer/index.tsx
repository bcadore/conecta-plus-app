import FiltroComponent from '../../components/FiltroComponent';
import * as S from './styles';

const AsideContainer = () => (
  <S.Aside>
    <div>
      <S.BarraDeBusca type="text" name="" id="" placeholder="Buscar" />
      <S.Filtros>
        <FiltroComponent legenda="Familia" contador={5} ativo />
        <FiltroComponent legenda="Trabalho" contador={4} />
        <FiltroComponent legenda="Amigos" contador={9} />
        <FiltroComponent legenda="Outros" contador={2} />
      </S.Filtros>
    </div>
  </S.Aside>
);

export default AsideContainer;
