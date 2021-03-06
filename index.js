//Que.1--Write one example explaining how you can write a callback function 

const sayHi = (nameOfFrirnd)=>{
    console.log("Hello my friend", nameOfFrirnd);
};

const greeting = (friend,callbackFunction)=>{
    callbackFunction(friend);
};

greeting("Abinash",sayHi);


// //Que.2"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// // Explain callback hell.
// // Numbers
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7

// const getNumbers = () => {
//     console.log("Printing the numbers");
//      setTimeout(() => {
//          console.log("1")
//          setTimeout(() => {
//              console.log("2");
//              setTimeout(() => {
//                  console.log("3");
//                  setTimeout(() => {                     
//                     console.log("4");                   
//                     setTimeout(() => {
//                         console.log("5");                      
//                         setTimeout(() => {
//                             console.log("6");
//                             setTimeout(() => {
//                                 console.log("7");
//                             },1000);                           
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);        
//     },1000);
// }

// getNumbers();



//Que.3-- "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"


// let promise = new Promise((resolve,reject) =>{
//     resolve();
// })

// promise.then(()=>{
//     setTimeout(() => {
//         console.log("1")
//     }, 1000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("2")
//     }, 2000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("3")
//     }, 3000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("4")
//     }, 4000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("5")
//     }, 5000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("6")
//     }, 6000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("7")
//     }, 7000);
// })

//Que.4-- Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
  
let promise1 = (arg) =>
new Promise((resolve,reject)=>{
    
    if (arg=="yes"){
        return resolve();
    }
    else{
        return reject();
    }
})


promise1("y").then(()=>{
    console.log("Promise resolved");
}).catch(()=>{
    console.log("Promise is rejected")
})

//Que.5--Create examples to explain callback function.

function coffee(){
console.log("or chocolate coffee ");
}
function tea(callback1){
    console.log("hot tea"); 
callback1();
}
tea(coffee);

//Que.6--Create examples to explain callback hell function.

//  const callBackHell = () => {
//      console.log("This is what callback hell looks like");
//       setTimeout(() => {
//           console.log("first callback");
//           setTimeout(() => {
//               console.log("second callback");
//               setTimeout(() => {
//                   console.log("third callback");
//                   setTimeout(() => {                     
//                      console.log("fourth callback");     
//                      setTimeout(() => {
//                          console.log("fifth callback");                 
//                          setTimeout(() => {
//                              console.log("sixth callback");
//                              setTimeout(() => {
//                                 console.log("seventh callback");
//                              },1000);                           
//                          },1000);
//                      },1000);
//                  },1000);
//              },1000);
//          },1000);        
//      },1000);
//  }
//  callBackHell();

//Que.7--Create examples to explain promises function.

let myPromise= new Promise(function(Resolve,Reject){
let x=1;

if (x==1){
    Resolve("OK")
}else{
    Reject("Error")
}
})
myPromise.then(
    function(value) {myDisplay(value);},
)
console.log(myPromise)

//Que.8--Create examples to explain async await function

async function tryingPromises()
{
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
    
}

console.log("Before calling the function");
let data = tryingPromises();
console.log("After calling the function ");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("End of code");


//Que.9-- Create examples to explain promise.all function


let pro1 = new Promise((resolve, reject) => {
  resolve("first resolve");
  reject("first error");
});
let pro2 = new Promise((resolve, reject) => {
  resolve("second resolve");
  reject("second error");
});
let pro3 = new Promise((resolve, reject) => {
  resolve("third resolve");
  reject("third error");
});
Promise.all([pro1, pro2, pro3])
  .then((result) => {
    console.log(result); // it gives all resolves as an array ['first resolve', 'second resolve', 'third resolve']
  })
  .catch((error) => {
    console.log(error);
  });
















