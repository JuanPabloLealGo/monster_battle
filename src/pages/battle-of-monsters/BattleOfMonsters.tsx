import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { MonsterBattlePayload } from "../../models/interfaces/monster-battle-payload.interface"
import { fetchBattleResult, fetchMonstersData, setComputersMonster } from "../../reducers/monsters/monsters.actions"
import { selectBattleResult, selectComputersMonster, selectMonsters, selectSelectedMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleResult, BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"


/*
- Create the monster's card component
- Implement a logic to select the computer's monster (random and differently to player's monter)
- Enable the button after after monsters are selected and implement the api call to get the result 
- Display the result
*/

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useAppSelector(selectMonsters)
    const selectedMonster = useAppSelector(selectSelectedMonster)
    const computerMonster = useAppSelector(selectComputersMonster)
    const result = useAppSelector(selectBattleResult)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, [dispatch]);

    useEffect(() => {
        dispatch(setComputersMonster())
    }, [dispatch, selectedMonster])

    const handleStartBattleClick = () => {
        if (selectedMonster && computerMonster) {
            const payload: MonsterBattlePayload = {
                monster1Id: selectedMonster.id,
                monster2Id: computerMonster.id,
            };
            dispatch(fetchBattleResult(payload));
        }
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            {result && <BattleResult>{`${result.winner.name} wins!`}</BattleResult>}

            <BattleSection>
                <MonsterBattleCard monster={selectedMonster} title={selectedMonster?.name || "Player"} />
                <StartBattleButton data-testid="start-battle-button" disabled={!selectedMonster && !computerMonster} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard monster={computerMonster} title="Computer" />
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }