//1.Write a person class to hold all details.
function Person(fName, lName, age, hobbies) {
    var _fName = fName ;
    var _lName = lName ;
    var _age = age;
    var _hobbies = hobbies;

    Object.defineProperties(this, {
        "firstName": {
            get: function () 
            { return _firstName },
            set: function (value) 
            { _firstName = value }
                     },
        "lstName": 
        {
            get: function () 
            { return _lastName },
            set: function (value) 
            { _lastName = value }
        },
        "Age": 
        {
            get: function () 
            { return _age },
            set: function (value) 
            { _age = value }
        },
        "Hobbies":
        {
            get: function()
            { return _hobbies },
            set: function (value)
            { _hobbies = value}
        }
    });

    this.getFullName = function () {
            return this.firstName + " " + this.lastName+ " "+ this.age+" "+ this.hobbies;
    }
};

var person1 = new Person();
person1.firstName = "Guvi";
person1.lastName = "Geek";
person1.age = 25;
person1.hobbies = ["Cooking","Reading","Drawing"]
    
console.log(person1.getFullName());

//circle class
class Circle
{ 
        constructor(radius)
        {
          this.radius = radius;
        } 
        get circum()
        { 
          return (2 * 3.14 * this.radius);
        }
        get area()
        { 
          return (this.radius * this.radius * 3.14);
        }
        get diameter()
        {
            return (2 *  this.radius);
        }
}
      var circle1 = new Circle(5); 
      console.log(circle1.circum)
      console.log(circle1.area)
      console.log(circle1.diameter)

      //Uber price calculator

      class Uberprice
{ 
        constructor(distance)
        {
          this.distance = distance;
          this.price = 15 //15/km
        } 
        get total()
        { 
          return (this.price * this.distance);
        }
        
}
      var totalprice = new Uberprice(5); 
      console.log(totalprice.total)