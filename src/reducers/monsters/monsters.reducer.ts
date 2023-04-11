import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { MonsterBattleResult } from '../../models/interfaces/monster-battle-result.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { getRandomMonster } from '../../utils';
import { fetchMonstersData, setSelectedMonster, setComputersMonster, fetchBattleResult } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computersMonster: Monster | null;
  battleResult: MonsterBattleResult | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computersMonster: null,
  battleResult: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state: MonsterState) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state: MonsterState) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state: MonsterState, action: PayloadAction<Monster[]>) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state: MonsterState, action: PayloadAction<Monster | null>) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setComputersMonster, (state: MonsterState) => ({
    ...state,
    computersMonster: getRandomMonster(state.monsters, state.selectedMonster),
  }));

  builder.addCase(fetchBattleResult.pending, (state: MonsterState) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleResult.rejected, (state: MonsterState) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleResult.fulfilled, (state: MonsterState, action: PayloadAction<MonsterBattleResult>) => ({
    ...state,
    battleResult: action.payload,
  }));

});
