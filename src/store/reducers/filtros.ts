import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as enums from '../../utils/enums/EnumContatos';

type FiltroState = {
  termo: string;
  criterio: 'todas' | 'tag';
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
  },
});

export const { alteraTermo } = filtroSlice.actions;

export default filtroSlice.reducer;
