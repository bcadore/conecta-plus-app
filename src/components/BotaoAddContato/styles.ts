import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color: ${variaveis.paynesGrayColor};
  color: #fff;
  position: fixed;
  bottom: 16px;
  right: 31px;
  cursor: pointer;
  text-decoration: none;
`;
