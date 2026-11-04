// ========================================
// LEVEL 1: BITWISE OPERATIONS
// ========================================

// This function finds the bitwise AND of two numbers
function bitwiseAND(a, b) {
  return a & b;
}

// This function finds the bitwise OR
function bitwiseOR(a, b) {
  return a | b;
}

// This function finds the bitwise XOR
function bitwiseXOR(a, b) {
  return a ^ b;
}

// Testing my functions
console.log("LEVEL 1");

console.log(bitwiseAND(7, 12)); // 4
console.log(bitwiseOR(7, 12)); // 15
console.log(bitwiseXOR(7, 12)); // 11

// ========================================
// LEVEL 2: REDUNDANT FUNCTION
// ========================================

// This function takes a string
// It returns another function that gives back the string

function redundant(str) {
  return function () {
    return str;
  };
}

// Testing with different strings
console.log("LEVEL 2");

const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

console.log(f1()); // apple
console.log(f2()); // pear
console.log(f3()); // empty string

// ========================================
// LEVEL 3: GET NOTES DISTRIBUTION
// ========================================

// We have students with different notes
// We only want to count notes from 1 to 5

function getNotesDistribution(students) {
  // First, put all students' notes in one array
  let allNotes = [];

  for (let i = 0; i < students.length; i++) {
    allNotes = allNotes.concat(students[i].notes);
  }

  // Remove invalid notes using filter
  let validNotes = allNotes.filter(function (note) {
    return Number.isInteger(note) && note >= 1 && note <= 5;
  });

  // Count how many times each note appears
  let distribution = validNotes.reduce(function (result, note) {
    if (result[note]) {
      result[note] = result[note] + 1;
    } else {
      result[note] = 1;
    }

    return result;
  }, {});

  return distribution;
}

// Students data
let students = [
  {
    name: "Steve",
    notes: [5, 5, 3, -1, 6],
  },
  {
    name: "John",
    notes: [3, 2, 5, 0, -3],
  },
];

// Testing my function
console.log("LEVEL 3");

console.log(getNotesDistribution(students));
