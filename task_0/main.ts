interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Kenya"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Williams",
  age: 23,
  location: "Berlin"
};

const studentsList: Student[] = [student1, student2];