import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  width: 100%;
  margin-top: 16px;
  color: ${variaveis.eggShellColor};
  font-weight: bold;
  font-size: 18px;
`;

export const InputRadio = styled.input`
    margin-right: 8px;
`

export const LabelRadio = styled.label`
    margin-right: 8px;
    color: ${variaveis.eggShellColor};
    font-size: 14px;
`
export const BtnForm = styled.button`
    display: block;
    margin-top: 18px;
    padding: 4px 8px;
    color: ${variaveis.richBlackColor};
    background-color: ${variaveis.eggShellColor};
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid ${variaveis.silverLakeColor};
    cursor: pointer;
`
