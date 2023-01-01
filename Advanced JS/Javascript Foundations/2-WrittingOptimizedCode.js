/*
    Things to try and avoid in Javascript
    - eval()
    - arguments
    - for in
    - with

    
    - delete
    - hidden classes
    - inline caching
*/

/*
    -- Inline Caching
    
    Code that executes the same method over and over

    The compiler can optimise this by using inline caching, so instead of looking up the object each time and finding the key's and value's. It will compile the code so it would return 'found Johnson Junior' 
*/

function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: "Johnson",
  lastName: "Junior",
};

findUser(userData);

/*
    -- Hidden Classes

    It is important to write code that is predictable both by Humans and Computers.

    In the example below we instaniate our properties in a random order which makes it harder for the compiler to create a relationship so it can compile the code.


    To better optimize our code, it is better to create all our properties inside the constructor or atleast instanitate our properties in an order


    -- delete

    When we use the delete keyword we are changing the internal hidden classes of the constructor
*/

function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;

obj2.b = 100;
obj2.a = 30;

delete obj1.x;
