import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contato';
import * as enums from '../../utils/enums/EnumContatos';

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'Teste Teste Teste',
      enums.TagEnum.FAMILIA,
      48912345678,
      'teste@teste.com',
      1
    ),
    new Contato(
      'Teste2 Teste2 Teste2',
      enums.TagEnum.AMIZADE,
      48912345678,
      'teste2@teste2.com',
      2
    ),
    new Contato(
      'Teste3 Teste3 Teste3',
      enums.TagEnum.TRABALHO,
      48912345678,
      'teste3@teste3.com',
      3
    ),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload);
    },
  },
});

export const { remover } = contatoSlice.actions;

export default contatoSlice.reducer;
