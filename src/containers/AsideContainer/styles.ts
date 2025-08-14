import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;
  padding: 16px;
  background-color: #1d2d44;
`;

export const Filtros = styled.div`
  display: grid;
  margin-top: 16px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
`;

export const BarraDeBusca = styled.input`
  width: 100%;
  padding: 8px;
  font-weight: bold;
  color: #666666;
  background-color: #f0ebd8;
  border: 1px solid #666666;
  border-radius: 8px;
`;
