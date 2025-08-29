import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EstiloGlobal, { AsideContainer } from './styles';

import store from './store';
import Home from './pages/Home';
import CadastraContato from './pages/CadastaContato';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastraContato',
    element: <CadastraContato />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <AsideContainer>
        <RouterProvider router={rotas} />
      </AsideContainer>
    </Provider>
  );
}

export default App;
