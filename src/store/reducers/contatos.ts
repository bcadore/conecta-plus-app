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
      phoneContato: '48911111111',
      emailContato: 'teste@teste.com',
    },
    {
      id: 2,
      nomeContato: 'Teste2 Teste2 Teste2',
      tagContato: enums.TagEnum.AMIZADE,
      phoneContato: '48922222222',
      emailContato: 'teste2@teste2.com',
    },
    {
      id: 3,
      nomeContato: 'Teste3 Teste3 Teste3',
      tagContato: enums.TagEnum.TRABALHO,
      phoneContato: '48933333333',
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
    editar: (state, action: PayloadAction<Contato>) => {
      const tarefaIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (tarefaIndex >= 0) {
        state.itens[tarefaIndex] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nomeContato.toLocaleLowerCase() ===
          action.payload.nomeContato.toLocaleLowerCase()
      );

      if (contatoExiste) {
        alert('já existe um contato cadastrado com este nome.');
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.itens.push(contatoNovo);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatoSlice.actions;

export default contatoSlice.reducer;
