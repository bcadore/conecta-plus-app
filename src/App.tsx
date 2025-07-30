import PageHeader from './containers/PageHeader';
import GlobalStyle, { PageContainer } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <PageHeader />
      </PageContainer>
    </>
  );
}

export default App;
