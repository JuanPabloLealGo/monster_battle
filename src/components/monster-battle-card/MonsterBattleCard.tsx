import { Monster } from "../../models/interfaces/monster.interface"
import { MonsterImage } from "../../pages/battle-of-monsters/BattleOfMonsters.styled"
import { getMonsterSkills } from "../../utils"
import { BattleMonsterCard, BattleMonsterTitle, ProgressBar, TitleSkill } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    return (
        <BattleMonsterCard centralized={!monster}>
            {monster && <MonsterImage src={monster.imageUrl} />}
            <BattleMonsterTitle centralized={!monster}>{title!}</BattleMonsterTitle>
            {monster && getMonsterSkills(monster).map((skill) => {
                return (
                    <div key={skill.name}>
                        <TitleSkill>{skill.name}</TitleSkill>
                        <ProgressBar variant="determinate" value={skill.value} />
                    </div>
                );
            })}
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }