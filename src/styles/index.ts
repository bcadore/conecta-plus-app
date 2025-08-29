import styled, { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
`;

export const AsideContainer = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export const MainContainer = styled.div`
  height: 100vh;
  padding: 0 16px;
  overflow-y: scroll;
  background-color: #0d1321;
`;

export const PageTitle = styled.h2`
  display: block;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`

export const BarraDeBusca = styled.input`
  width: 100%;
  padding: 8px;
  font-weight: bold;
  color: #666666;
  background-color: #f0ebd8;
  border: 1px solid #666666;
  border-radius: 8px;
`;

export default EstiloGlobal;
