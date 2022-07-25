         //By Array Literal
// const animals=['dog','cat','deer','fox'];
// for(let x in animals){
//     console.log(animals[x]);
// }
// for(let i=0;i<animals.length;i++){
//     console.log(animals[i]);
// }



           //By array Directly
// var i=0;
// const arr=new Array();
// arr[0]=60;
// arr[1]=80;
// arr[2]=70;
// arr[3]=50;
// arr[4]=90;
// arr[5]=30;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }
               //By Array constructor
// var emp=new Array('yamini','reshama','mama');
// for(i=0;i<emp.length;i++){
//     console.log(emp[i]);
// }
         //Methods
// const arr=[10,20,30,40];
// arr.push(50);//it will be adding last place in array
// arr.pop(); // 40 it will be remove last element in array
// arr.shift(); //10  it will be remove first element in array
   //  arr.unshift(70);  // 70 it will adding first element in array        
// const index=3; //indexbased
// const index =arr.indexOf(30); // based on value it will remove
// arr.splice(index,1) // 30 it will remove particular element 
        
// console.log(arr);


// var arr=[1,2,6,9,2,1,3,4,5,3,6,10,89,78,90,79,67,76];
// var res=[];
// for(let i=0;i<arr.length;i++){
//     if(arr.indexOf(arr[i])==i){
//         res.push(arr[i])
//     }
// }
// console.log(res)
 


// var x ;     // var is declared but not assignable
// console.log(x);

// var y=null;     // var it represents empty or unknown value.
// console.log(y);

// {
//     const x=30; //block scope
// }

// function myfun(){
//     let x=10;
//      const y=20;   //function scope
//      var z=40;
// }
// myfun();

// let t=40;   // globle scope
// function fun(){
//     console.log(t);
// }
// fun();

// function funname(){
//     console.log('Hello');
// }
// funname();

// function func(a,b){
//     console.log(a+b);
// }
// func(30,70);


// function addfun(a,b){
//     return a+b;
// }

// let result= addfun(50,30);
// console.log('sum is ' +result);


// sort()
// indexOf()
// lastindexOf()
// includes()
// find()
// findIndex()
// filter()
// splice()
// slice()
// concat()
// toString()
// join()
// const months=['march','april','december','nov','july','june'];
// console.log(months.sort());
// const num=[4829,92737,1827,84681,8125,8125];
// console.log(num.sort());     //sorting the elements

// console.log(num.indexOf(92737));  //it will displaying index positions of the elements
// console.log(num.lastIndexOf(8125)); //it will displaying last index of the element
// console.log(months.includes('june')); //it will check array element is there or not true or false
// console.log(num.find((nums=>nums>84681)))
// console.log(num.findIndex((nums=>nums>84681)))
// console.log(num.filter((nums=>nums<=8125)))
// console.log(months.slice(2,4));

// console.log(months.splice(1,3,'august','jan'))

var num = 10;  
function sum()   
{  
console.log(num+num);  
}   
sum(); 

var str="Javatpoint";   
console.log(str.charAt(5)); 

var msg = "JavaScript is a case-sensitive language"; //Here, var should be used to declare a variable  
function display()   
{  
document.writeln(msg); // It will not display the result.  
}   
display(); 
function display()  
{  
  document.writeln("10"+20+30);  
}  
display();
