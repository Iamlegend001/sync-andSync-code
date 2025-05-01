function orderFood() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let chanse = Math.random()<.7
      if(chanse) res()
      else rej()
    }, 2000);
  });
}

orderFood().then(function () {
  console.log("Pizza Delevered");
}).catch(function(){
  console.log("Failed")
})
