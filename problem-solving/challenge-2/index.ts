export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {

  const dices: number[] = [dice1, dice2, dice3];

  const numbersOut = dices.filter((i) => i <= 0 || i > 6);

  if (numbersOut.length > 0) {
    throw new Error('Dice out of number range');
  }

  let maxCount: number = 0;
  let repearingDice: number = 0;

  for (const i in dices) {
    let count: number = 0;

    dices.forEach((d) => d === dices[i] && count++);

    if (count > maxCount) {
      maxCount = count;
      repearingDice = dices[i];
    }

  }

  if (maxCount === 1) {
    return Math.max(...dices);
  } else {
    return repearingDice * maxCount;
  }

};
