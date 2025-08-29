import styled from 'styled-components';
import variaveis from '../../styles/variaveis';

import * as enums from '../../utils/enums/EnumContatos';
import { CardButton } from '../../styles';

type TagProps = {
  tagContato: enums.TagEnum;
};

function retornaCorDeFundo(props: TagProps): string {
  if ('tagContato' in props) {
    if (props.tagContato === enums.TagEnum.FAMILIA)
      return variaveis.richBlackColor;
    if (props.tagContato === enums.TagEnum.AMIZADE)
      return variaveis.prussianBlueColor;
    if (props.tagContato === enums.TagEnum.TRABALHO)
      return variaveis.paynesGrayColor;
    return variaveis.silverLakeColor;
  }

  return variaveis.silverLakeColor;
}

export const Card = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${variaveis.eggShellColor};
  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  color: ${variaveis.richBlackColor};
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: ${variaveis.eggShellColor};
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  gap: 8px;

  label {
    font-weight: bold;
    margin-bottom: 2px;
  }

  input {
    width: 50%;
    padding: 8px;
    border: 1px solid ${variaveis.richBlackColor};
    border-radius: 4px;
  }
`;

export const CardAction = styled.div`
  border-top: 1px solid ${variaveis.richBlackColor};
  padding-top: 16px;
`;

export const CancelCardButton = styled(CardButton)`
  background-color: ${variaveis.silverLakeColor};
`;

export const RemoveCardButton = styled(CardButton)`
  background-color: ${variaveis.paynesGrayColor};
`;
