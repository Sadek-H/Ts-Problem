function multiplyValue(a: number, b?: number) {
  if (b == undefined) {
    return a * 2;
  } else {
    return a * b;
  }
}

function processInput(
  value: string | number | boolean,
): string | number | boolean {
  if (typeof value == "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value == "number") {
    return value * 10;
  }
  if (typeof value == "boolean") {
    if (value == true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }

  return "";
}



function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {

  const [latitude, longitude, locationName] = coordinate;
  return `Location : ${locationName} (${latitude}, ${longitude})`;
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
  const array: T[] = [];
  const ary = arrays.map((arr) => {
    arr.map((item) => {
      array.push(item);
    });
  });
  return array;
}



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number) {
  const filteredItm: Course[] = [];
  courses.map((itm) => {
    if (itm.isPublished == true && itm.students >= minStudents) {
      filteredItm.push(itm);
    }
  });
  return filteredItm;
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const filteredItm: T[K][] = [];
  items.map((itm) => {
    filteredItm.push(itm[key]);
  });
  return filteredItm;
}



class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}



class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo() {
    return `Manager of ${this.department} department: ${this.name}`;
  }
}




function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      setTimeout(() => {
        reject(new Error("Access Denied: Must be 18 or older"));
      });
    }
  });
}
