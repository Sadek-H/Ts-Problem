Provide a practical example of combining Union (|) and Intersection (&) types in TypeScript.

Answer:



type User1 = { name: string };
type User2 = { age: number };

type Worker = User1 & User2;


