// Array of student objects
const students = [
  {
    name: "Abhay",
    chemistryMarks: 100,
    biologyMarks: 98,
    dob: "16-03-19999"
  },
  {
    name: "Nikki",
    chemistryMarks: 65,
    biologyMarks: 93,
    dob: "02-06-1999"
  },
  {
    name: "Ram",
    chemistryMarks: 89,
    biologyMarks: 93,
    dob: "1-07-2000"
  }
  // Add more student objects as needed
];

// Custom sorting function based on the given rules
function sortStudents(a, b) {
  // Sort by total marks in descending order
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }

  // Sort by biology marks in descending order
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  // Sort by date of birth in ascending order
  const dateA = new Date(a.dob.split("-").reverse().join("-"));
  const dateB = new Date(b.dob.split("-").reverse().join("-"));
  return dateA - dateB;
}

// Sort the students array using the custom sorting function
students.sort(sortStudents);

// Print the sorted array
console.log(students);
