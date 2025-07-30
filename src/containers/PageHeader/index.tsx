import AddBtnComponent from '../../components/AddBtnComponent';
import NavbarComponent from '../../components/NavbarComponent';
import TitleComponent from '../../components/TitleComponent';

import * as S from './styles'

const PageHeader = () => (
  <S.HeaderWrapper>
    <NavbarComponent />
    <TitleComponent />
    <AddBtnComponent />
  </S.HeaderWrapper>
);

export default PageHeader;
