/*

const array1 = [1,"car",true];
console.log(array1[1]);
let carMoving = true;
if(carMoving = false){
    console.log("Not Moving...");
}
else{
    console.log("Moving...");
}
function Car(){
    console.log("🏎️...");
};
Car();
function Multiply(a1,a2){
    return a1*a2;
};
Multiply("🏎️...","🏎️...");
let obj1 = {
    Name : "Logu",
    Action : function greet(){return "hello"},
    Action2 : function give(a,b){return a+b;},
    Move : function move(a,b,c,d){return false;}
};
console.log(obj1.Name);
console.log(obj1.Action());
console.log(obj1.Action2("Hi ","I'm Loganaath"));

let Random1;
let Random2;
let A;
let B;
function Start(){
    let timer = setInterval(data(),1000);
};
function data(){
    Random1 = Random1Data();
    Random2 = Random2Data();
    console.log(Random1);
    console.log(Random2);
};
function Random1Data(){
    let a = Math.random();
    A = a+50;
    return A;
};
function Random2Data(){
    let b = Math.random();
    B = b+50;
    return B;
};
Start();
let cars = ["BMW","RollsRoyce"];
let i = 1;
let len = cars.length;
let text = "";
for (;i<len;i++){
    return text += cars[i] + " ";
}

let View = document.getElementsById("access");
document.write(View);

*/

/*let car = {
    Name : "RollsRoyce",
    Model : "X550R",
    DateOfManufactured : "25/04/2021",
    InStock : 21,
    OutofStock : false,
    AvgSpeed : "200km/hr",
    MaxSpeed : "350km/hr",
    ModifiedPieces : 12,
    DateOfSubscription : "22/04/2022",
    Manufactured : 18,
    SecondHand : 3,
    C_Level_Details : function (a,b,c,d){
        return a,b,c,d;
    },
    A_Level_Details : function (a,b,c,d,e,f,g,h,i,j,k){
        return a,b,c,d,e,f,g,h,i,j,k;
    } 
};
console.log(car.Name);

function show(){
    let customer = true;
    if(customer==true){
        console.log(A_Level_Details(car.Name,car.Model,car.InStock,car.OutofStock,car.ModifiedPieces,car.AvgSpeed,car.MaxSpeed,car.DateOfManufactured,car.DateOfSubscription,car.Manufactured));
    }
    else{
        return C_Level_Details(car.Name,car.Model,car.AvgSpeed,car.MaxSpeed);
    }
}
console.log(show());
/*
let func = Math.random().toFixed();

console.log(func);
*/

function add(a,b){
    return  a+b;
} 
console.log(add(2,3));

function tocelsius(fahrenheit){
    return (5/9)*(fahrenheit-32);
}
console.log(tocelsius(33)+"°C");

return(function(a1=a,b2=b){
    let a = 10;
    let b = 20;
    console.log(a+b);
}());

















