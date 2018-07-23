describe("5. About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = numbers.filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([1,3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = numbers.map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.every(isEven)).toBe(true);
    expect(mixedBag.every(isEven)).toBe(false);
  });

  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.some(isEven)).toBe(true);
    expect(mixedBag.some(isEven)).toBe(true);
  });

  it("should write a function to filter out objects that match a criteria", function () {
    // return a filer people over 40
    var people = [{name: "bob", age: 41}, {name: "jane", age: 22},{name: "janet", age: 47},{name: "louis", age: 35}];
    var peopleOverFourty = people.filter(function (x) {
      return FILL_ME_IN;
    });

    expect(peopleOverFourty).toEqual([{name: "bob", age: 41}, {name: "janet", age: 47}]);
  });

  it("should write a function to transform elements in an array into a new array", function () {
    // return a list of everyone's age
    var people = [{name: "bob", age: 41}, {name: "jane", age: 22},{name: "janet", age: 47},{name: "louis", age: 35}];
    var names = people.map(function(x) {
      return x.age;
    });

    expect(names).toEqual([41, 22, 47, 35]);
  });

  it("should write a function that finds the difference between two arrays", function () {
    // implement a difference function for lists, which subtracts one list from another.
    // It should remove all values from list a, which are present in list b.
    // arrayDiff([1,2],[1]) == [2]
    // arrayDiff([1,2,2,2,3],[2]) == [1,3]

    var arrayDiff = function(array1, array2) {
      return array1.filter(function(item){
        console.log({item});

          //find not repetitive numbers

        return array2.every(item2 => item != item2);
      });
    };
//                    Array 1   Array 2
    expect(arrayDiff([1,2,3], [1,2])).toEqual([3]);
    expect(arrayDiff([1,2,2,2,3], [2])).toEqual([1,3]);
  });

  it("should write a function to capitalize every word in a string", function(){
    // Hint:
    // First split the string into a list of words
    // Map over each word
    // turn the array back into a string

    var jadenCase = function(string){
      
      return string
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1) )
      .join(" ");
    };

    expect(jadenCase("How can mirrors be real if our eyes aren't real")).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");
  });

  it("can write your own filter function using a for loop", function() {
    var myFilter = function(arr, func){
      var newArray = [];
      for(var i =0; i < arr.length; i++) {
        var arrayItem = arr[i];
        if(func(arrayItem)){
          newArray.push(arrayItem)
        }
        else {
          console.log("it was false, not doing anything");
        }
      }
      return newArray;
    };

    expect(myFilter([1,2,3], (i) => i > 2)).toEqual([3]);
  });

  it("can write your own map function using forEach", function() {
    var myMap = function(arr, func){
      arr.forEach(function(arrayItem) {
        return FILL_ME_IN;
      });
    };

    expect(myMap([1,2,3], (i) => i + 2)).toEqual([3,4,5]);
  });
});
