import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const Aside = styled.aside`
  height: 100vh;
  padding: 16px;
  background-color: ${variaveis.prussianBlueColor};
`;

export const Filtros = styled.div`
  display: grid;
  margin-top: 16px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;
