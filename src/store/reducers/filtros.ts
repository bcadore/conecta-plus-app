import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as enums from '../../utils/enums/EnumContatos';

type FiltroState = {
  termo?: string;
  criterio: 'tag' | 'todas';
  valor?: enums.TagEnum;
};

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas',
};

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    }
  },
});

export const { alteraTermo, alteraFiltro } = filtroSlice.actions;

export default filtroSlice.reducer;
