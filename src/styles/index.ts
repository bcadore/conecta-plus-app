import styled, { createGlobalStyle } from 'styled-components';
import variaveis from './variaveis';

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
  grid-template-columns: 15% auto;
  min-width: 200px;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;
  }
`;

export const MainContainer = styled.div`
  padding: 0 16px;
  overflow-y: auto;
  background-color: ${variaveis.richBlackColor};
`;

export const PageTitle = styled.h2`
  display: block;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: bold;
  color: ${variaveis.eggShellColor};
`;

export const BarraDeBusca = styled.input`
  width: 100%;
  padding: 8px;
  font-weight: bold;
  color: ${variaveis.silverLakeColor};
  background-color: ${variaveis.eggShellColor};
  border: 1px solid ${variaveis.prussianBlueColor};
  border-radius: 8px;
`;

export const CardButton = styled.button`
  margin-right: 8px;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 12px;
  color: #f0ebd8;
  background-color: ${variaveis.richBlackColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default EstiloGlobal;
