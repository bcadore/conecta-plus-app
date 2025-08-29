import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../models/Contato';

type ContatosState = {
  itens: Contato[];
};

// Função para carregar contatos do localStorage
const carregarContatos = (): Contato[] => {
  const dados = localStorage.getItem('contatos');
  if (dados) {
    try {
      return JSON.parse(dados) as Contato[];
    } catch (error) {
      console.error('Erro ao ler contatos do localStorage', error);
      return [];
    }
  }
  return [];
};

const salvarContatos = (contatos: Contato[]) => {
  localStorage.setItem('contatos', JSON.stringify(contatos));
};

const initialState: ContatosState = {
  itens: carregarContatos(),
};

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
      salvarContatos(state.itens);
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id);
      if (index >= 0) {
        state.itens[index] = action.payload;
        salvarContatos(state.itens);
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nomeContato.toLowerCase() ===
          action.payload.nomeContato.toLowerCase()
      );

      if (contatoExiste) {
        alert('Já existe um contato cadastrado com este nome.');
      } else {
        const maiorId = state.itens.reduce(
          (max, contato) => (contato.id > max ? contato.id : max),
          0
        );

        const contatoNovo: Contato = {
          ...action.payload,
          id: maiorId + 1,
        };

        state.itens.push(contatoNovo);
        salvarContatos(state.itens);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatoSlice.actions;
export default contatoSlice.reducer;
