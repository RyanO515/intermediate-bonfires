function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  
   arr = collection.filter(function(obj) {
     return keys.every(function(key) {
       return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
  return arr;
}

// In this challenge I got a good lesson in the 'keys' property of the Global Object.

// First step is to declare a variable that holds the property(key) of the source argument.

// Second is to filter through the collection arugment and for every 'source' property, 
//   return the collection object that has both the same property and value.
// Lastly, return the array of objects that returned true.

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });