function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }

  const students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);

const student1Seat = classRoom[0]();
const student4Seat = classRoom[3]();
const student10Seat = classRoom[9]();

//Test
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());