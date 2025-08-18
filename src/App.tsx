import AsideContainer from './containers/AsideContainer';
import ContactsListContainer from './containers/ContactsListContainer';
import EstiloGlobal, { PageContainer } from './styles';

function App() {
  return (
    <>
      <EstiloGlobal />
      <PageContainer>
        <AsideContainer />
        <ContactsListContainer />
      </PageContainer>
    </>
  );
}

export default App;
