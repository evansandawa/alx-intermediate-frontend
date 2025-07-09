interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [propName: string]: any; // Index signature for additional properties
}

const teacher1: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: "New York",
  // Additional property allowed by the index signature
  contract: true
};

console.log("Teacher 1:", teacher1);

const teacher2: Teacher = {
  firstName: "John",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "London",
  // Another additional property
  department: "Science"
};

console.log("Teacher 2:", teacher2);

teacher1.specialization = "Mathematics";
console.log("Teacher 1 with specialization:", teacher1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  // Ensure firstName is not empty to avoid errors with charAt(0)
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};

console.log("\n--- printTeacher Examples ---");
console.log(`printTeacher("John", "Doe"): ${printTeacher("John", "Doe")}`); // Expected: J. Doe
console.log(`printTeacher("Alice", "Wonderland"): ${printTeacher("Alice", "Wonderland")}`); // Expected: A. Wonderland
console.log(`printTeacher(teacher1.firstName, teacher1.lastName): ${printTeacher(teacher1.firstName, teacher1.lastName)}`);

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  /**
   * Creates an instance of StudentClass.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Returns a string indicating that the student is currently working on homework.
   * @returns {string} "Currently working"
   */
  workOnHomework(): string {
    return "Currently working";
  }

  /**
   * Returns the first name of the student.
   * @returns {string} The student's first name.
   */
  displayName(): string {
    return this.firstName;
  }
}

console.log("\n--- StudentClass Examples ---");
const studentInstance = new StudentClass("Alice", "Smith");
console.log(`Student's first name: ${studentInstance.displayName()}`); // Expected: Alice
console.log(`Student's homework status: ${studentInstance.workOnHomework()}`); // Expected: Currently working

const anotherStudent = new StudentClass("Bob", "Johnson");
console.log(`Another student's first name: ${anotherStudent.displayName()}`); // Expected: Bob

