function multiplyValue(a, b) {
    if (b == undefined) {
        return a * 2;
    }
    else {
        return a * b;
    }
}
function processInput(value) {
    if (typeof value == "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value == "number") {
        return value * 10;
    }
    if (typeof value == "boolean") {
        if (value == true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
    return "";
}
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location : ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    const array = [];
    const ary = arrays.map((arr) => {
        arr.map((item) => {
            array.push(item);
        });
    });
    return array;
}
function getPopularCourses(courses, minStudents) {
    const filteredItm = [];
    courses.map((itm) => {
        if (itm.isPublished == true && itm.students >= minStudents) {
            filteredItm.push(itm);
        }
    });
    return filteredItm;
}
function pluckValues(items, key) {
    const filteredItm = [];
    items.map((itm) => {
        filteredItm.push(itm[key]);
    });
    return filteredItm;
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department} department: ${this.name}`;
    }
}
function validateAgeAsync(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            setTimeout(() => {
                reject(new Error("Access Denied: Must be 18 or older"));
            });
        }
    });
}
export {};
