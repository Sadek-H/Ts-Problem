Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.


Answer : 


 class User {
    public name : string
    private phoneNumber : number   //can't access from outside
    protected salary : number     // also cant access from outside but can accessable inside class and its child
    readonly role : string    // just read
 }