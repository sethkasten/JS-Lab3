"use strict";

// 1

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2

const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

// 3

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// 4

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

// 5

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

// 6

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};

console.log(findSubmissionByName(submissions, "Jill"));

// 7

const findLowestScore = (array) => {
  let lowestScore = 1000;
  array.forEach((item) => {
    if (item.score < lowestScore) {
      lowestScore = item.score;
    }
  });
  return array.find((item) => {
    return item.score === lowestScore;
  });
};

console.log(findLowestScore(submissions));

// 8

const findAverageScore = (array) => {
  let sum = 0;
  for (let element of array) {
    sum += element.score;
  }
  return sum / array.length;
};

console.log(findAverageScore(submissions));

// 9

const filterPassing = (array) => {
  return array.filter((submission) => {
    return submission.passed;
  });
};

console.log(filterPassing(submissions));

// 10

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));

// Extras

const filterByNameLength = (array, length) => {
  return array.filter((item) => {
    return item.name.length === length;
  });
};
