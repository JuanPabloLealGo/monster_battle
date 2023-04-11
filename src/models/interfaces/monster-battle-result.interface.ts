import { Monster } from "./monster.interface";

export interface MonsterBattleResult {
  winner: Monster;
  tie: boolean;
}