function selectFruits(fruits, targetSum) {
  let sums = calculateSums(fruits);
  let closestSum = findClosestSum(sums, targetSum);

  return sums.get(closestSum);
}

function findClosestSum(sums, targetSum) {
  let closestSum = 0;
  for (let sum of sums.keys()) {
    if (sum <= targetSum && sum > closestSum) {
      closestSum = sum;
    }
  }
  return closestSum;
}

function calculateSums(fruits) {
  let sums = new Map();
  sums.set(0, []);

  for (let fruit of fruits) {
    let newSums = new Map();
    for (let [sum, combo] of sums) {
      let newCombo = [...combo, fruit];
      let newSum = sum + fruit.cost;
      if (!sums.has(newSum)) {
        newSums.set(newSum, newCombo);
      }
    }
    for (let [newSum, newCombo] of newSums) {
      sums.set(newSum, newCombo);
    }
  }
  return sums;
}

export default selectFruits;
