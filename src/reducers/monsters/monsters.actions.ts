import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { MonsterBattlePayload } from '../../models/interfaces/monster-battle-payload.interface';
import { MonsterBattleResult } from '../../models/interfaces/monster-battle-result.interface';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputersMonster = createAction(
  'monsters/setComputersMonster',
);

export const fetchBattleResult = createAsyncThunk<MonsterBattleResult, MonsterBattlePayload>(
  'monster/fetchBattleResult',
  MonsterService.getResult,
);