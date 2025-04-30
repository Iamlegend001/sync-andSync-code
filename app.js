// callbacks is async function

// function getDetails(name, cb) {
//   setTimeout(function () {
//     console.log("sending the request to instagram......");
//   },
//   1000)

//   setTimeout(function(){
//     console.log("fetching data .........")
//   },3000)

//   setTimeout(function(){
//     cb()
//   },6000)
// }
// getDetails("harshvandanasharma", function () {
//   console.log("data saved in gallary")
// });


// the real Call Back is here

// function stepOne(cb) {
//   console.log("step 1");
//   cb();
// }
// function stepTwo(cb) {
//   console.log("step 2");
//   cb();
// }
// function stepThree(cb) {
//   console.log("step 3");
//   cb();
// }

// // this is callback Hell
// stepOne(()=>{
//   stepTwo(()=>{
//     stepThree(()=>{
//       stepTwo(()=>{

//       })
//     })
//   })
// })




// Promises Lets learn Promises


new Promise( function(res,rej){
  console.log("instagram jaao data lao")
  
})