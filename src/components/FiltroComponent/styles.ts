import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

type Props = {
  ativo: boolean;
};

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${(props) =>
      props.ativo ? variaveis.eggShellColor : variaveis.prussianBlueColor};
  border-radius: 8px;
  background-color: ${(props) =>
    props.ativo ? 'none' : variaveis.eggShellColor};
  color: ${(props) =>
    props.ativo ? variaveis.eggShellColor : variaveis.prussianBlueColor};
  cursor: pointer;
`;

export const Contador = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
