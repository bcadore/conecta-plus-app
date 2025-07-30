import * as S from './styles';
import logo from '../../assets/logo.png'

const NavbarComponent = () => (
  <S.Navbar>
    <img src={logo} alt="Logo do Conecta Plus App" />
    <input
      type="text"
      name="buscarContato"
      id="buscarContato"
      placeholder="Buscar Contato"
    />
  </S.Navbar>
);

export default NavbarComponent;