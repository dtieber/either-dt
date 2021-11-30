### Either :-1:/:+1:
Very simple implementation of Haskell's Either.


##### What is it?
Either represents the possibility of two states, which are correct or error.

##### But... why would I need that?
In Typescript/Javascript you can throw errors, but errors are somewhat unchecked (they are not checked at transpile-time) and someone needs to catch them; otherwise they'll bubble up and make your program crash. Sometimes, you are not even aware that a method might throw an error (e.g., because it's bubbling from another method) so you might not even think about surrounding your code with a try/catch block.

##### How can I switch to this Either?
Just check out this file [.src/either.ts](./src/either.ts) and its tests: [./src/__tests__/either.test.ts](./src/__tests__/either.test.ts)
