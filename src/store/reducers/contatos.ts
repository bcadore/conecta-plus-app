import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contato';

type ContatosState = {
  itens: Contato[];
};

const initialState: ContatosState = {
  itens: [],
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
