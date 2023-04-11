import { API_URL } from '../../constants/env';
import { MonsterBattlePayload } from '../../models/interfaces/monster-battle-payload.interface';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const getResult = async (payload: MonsterBattlePayload): Promise<any> =>
  await fetch(
    `${API_URL}/battle`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }
  ).then((response) => response.json());

export const MonsterService = {
  getAll,
  getResult,
};
