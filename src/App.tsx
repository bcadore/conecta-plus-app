import { Provider } from 'react-redux';
import AsideContainer from './containers/AsideContainer';
import ContactsListContainer from './containers/ContactsListContainer';
import EstiloGlobal, { PageContainer } from './styles';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <PageContainer>
        <AsideContainer />
        <ContactsListContainer />
      </PageContainer>
    </Provider>
  );
}

export default App;
