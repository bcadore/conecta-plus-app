import styled from 'styled-components';
import { Props } from '.';

type OmitFiltro = Omit<Props, 'contador' | 'legenda'>;

export const Card = styled.div<OmitFiltro>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#F0EBD8' : '#1D2D44')};
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#1D2D44' : '#F0EBD8')};
  color: ${(props) => (props.ativo ? '#F0EBD8' : '#1D2D44')};
`;

export const Contador = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`;

export const Label = styled.span`
  font-size: 14px;
`;
