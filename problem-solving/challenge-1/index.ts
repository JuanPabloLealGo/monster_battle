type Result = {
  positives: string,
  negative: string,
  zeros: string,
};

export const numbersFractionCalculator = (numbers: number[]): Result => {

  const getFraction = (count: number): string => {
    const total: number = numbers.length;
    return (count / total).toFixed(6);
  }

  const count = [0, 0, 0];

  for (const index in numbers) {
    if (numbers[index] > 0) {
      count[0]++;
    } else if (numbers[index] < 0) {
      count[1]++;
    } else {
      count[2]++;
    }
  }

  return {
    positives: getFraction(count[0]),
    negative: getFraction(count[1]),
    zeros: getFraction(count[2]),
  };
};
