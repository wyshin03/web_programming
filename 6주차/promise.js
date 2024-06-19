var pro1 = new Promise(function(resolve, reject) {
        resolve('success');
});
pro1.then(function(result){
  console.log('result', result);
 })
