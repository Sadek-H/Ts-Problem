
//problem 1

function multiplyValue(a:number,b?:number ){
     if(b == undefined){
        return a*2 ;
     }
     else {
        return a* b ;
     }
}

console.log(multiplyValue(10))
console.log(multiplyValue(10, 5))
console.log(multiplyValue(7, 0))

//problem 2

function processInput (value: string | number | boolean ): string | number | boolean {
     if(typeof value == "string"){
         return  value.trim().toLowerCase()
     }
     if(typeof value == "number"){
        return value * 10
     }
     if(typeof value == "boolean"){
            if(value == true){
                return "Active" ;
            } 
            else{
                return "Inactive" ;
            }
     }

     return ""
}

console.log(processInput(" Typescript "))
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

//problem 3




//problem 4

function concatenateArrays <T> (...arrays: T[][]): T[] {
     const array: T[] = [] 
    const ary =  arrays.map((arr)=>{
         arr.map((item)=>{
            array.push(item)
         })
        
       })
       return array ;
      
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]))
console.log(concatenateArrays([1, 2], [3, 4], [5]))


//problem 5 

interface Course {
  title : string
  students: number
  isPublished : boolean
}

function getPopularCourses (courses: Course[],minStudents : number ){
      const filteredItm : Course[] = []
    courses.map((itm)=>{
           if( itm.isPublished == true && itm.students>=minStudents ){

               filteredItm.push(itm)
           }
       })
       return filteredItm ;
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80))


// problem 6
function pluckValues <T, K extends keyof T>(items: T[],key: K): T[K][]{
    const filteredItm : T[K][] = []
   items.map((itm)=>{
        filteredItm.push (itm[key])
      })
       return filteredItm;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));


//problem 7

class Employee {
    protected name : string
    private baseSalary : number

    constructor(name: string, baseSalary: number){
        this.name = name
        this.baseSalary = baseSalary
    }

    getDetails(){
         return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager  extends Employee{
    private department : string

    constructor (name: string, baseSalary: number, department: string){
          super(name, baseSalary)
          this.department = department
    }

    getRoleInfo(){
            return `Manager of ${this.department} department: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

//problem 8

 function validateAgeAsync (age:number):Promise<string>{
   return new Promise((resolve,reject)=>{

       if (age >= 18) {
        setTimeout(()=>{
             resolve ("Access Granted");
        },1000) 
    } 
    
    else {

         setTimeout(()=>{
             reject(new Error ("Access Denied: Must be 18 or older"));
        }) 
    
    }
   
   })
 

}

console.log(await validateAgeAsync(20))
