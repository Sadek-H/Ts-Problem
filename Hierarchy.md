How does TypeScript's type hierarchy work with any, unknown, and never? Why is unknown always preferred over any? Why is unknown always preferred over any?

Answer: 

With any its allowed all types of value. 
   let x: any = "Hello";
   x= 100 ; 
   x= true;

   Unknown check the type before using it. 
       let x: any = "Hello";
       if(typeOf == string){
        console.log()
       }

       never mean it never return . It uses on function when no possible value ramin .


 unknown always preferred over any because Unknown checks types before executes. So it safer than any.      