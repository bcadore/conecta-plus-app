import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contato';
import * as enums from '../../utils/enums/EnumContatos';

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeContato: 'Teste Teste Teste',
      tagContato: enums.TagEnum.FAMILIA,
      phoneContato: 48911111111,
      emailContato: 'teste@teste.com',
    },
    {
      id: 2,
      nomeContato: 'Teste2 Teste2 Teste2',
      tagContato: enums.TagEnum.FAMILIA,
      phoneContato: 48922222222,
      emailContato: 'teste2@teste2.com',
    },
    {
      id: 3,
      nomeContato: 'Teste3 Teste3 Teste3',
      tagContato: enums.TagEnum.FAMILIA,
      phoneContato: 48933333333,
      emailContato: 'teste3@teste3.com',
    },
  ],
};

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload),
      ];
    },
  },
});

export const { remover } = contatoSlice.actions;

export default contatoSlice.reducer;
