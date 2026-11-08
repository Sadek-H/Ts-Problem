--What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

Answer:

The core differences is 
   Interface allows duplicate declareation with the same name . But type can't . 
         Like--   interface User{
                  name: string ;
                   }
                    interface User{
                        age: number ;
                    }

I always prefer interface whenever i do classes and objects.  Everyone use this . Now it feels natural for me.                      