
let obj={
    name : "Pepper",
    age: 22,
    my_arr: [1,"hello",null],
    fun : function greet(){console.log("Hello")},
}

// /*object element access*/
// console.log(obj.name);
// let fn= obj.fun;
// fn();
// console.log(fn);
// console.log(obj.my_arr);

// let myName = obj["name"];
// console.log(myName);

// /* insertion/modification */
// obj.age=25;
// obj.college='IIT';
// console.log(obj);

// /* delete property */
// delete obj.college;
// console.log(obj);

/* use of for-in loop on objects*/
for(let key in obj)
{ console.log(key); }

for(let key in obj)
{ console.log(obj.key);}

for(let key in obj)
{ console.log(obj[key]); }
