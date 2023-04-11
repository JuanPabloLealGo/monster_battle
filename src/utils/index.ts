import { MonsterSkill } from "../models/interfaces/monster-skills.interface";
import { Monster } from "../models/interfaces/monster.interface";

export const getMonsterSkills = (monster?: Monster | null): MonsterSkill[] => ([
  { name: 'HP', value: monster?.hp || 0 },
  { name: 'Attack', value: monster?.attack || 0 },
  { name: 'Defense', value: monster?.defense || 0 },
  { name: 'Speed', value: monster?.speed || 0 },
]);

export const getRandomMonster = (monsters: Monster[], selectedMonster: Monster | null): Monster | null => {
  let randomMonster = null;
  if (selectedMonster) {
    const availableMonsters = monsters.filter((m) => m.id !== selectedMonster.id);
    randomMonster = availableMonsters[Math.floor(Math.random() * availableMonsters.length)];
  }
  return randomMonster;
}