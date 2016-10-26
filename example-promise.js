// function getTempCallback(location, callBack){
//     callBack(undefined, 78);
//     callBack('City not found');
// }
// getTempCallback('Beijing', function(err, temp){
//     if(err){
//         console.log('error:', err);
//     }
//     else{
//         console.log('success', temp);
//     }
// });


// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found either.');
//         }, 1000);
        
//     });
// }
// getTempPromise('Beijing').then(function(temp){
//     console.log('promise success', temp);
// }, function(err){
//     console.log('promise error',err);
// });

//Challenge Area
function addPromise(a,b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }
        else{
            reject('Please make sure both are numbers:'+a+','+b);
        }
    });
}

addPromise(3,8).then(function(sum){
    console.log('promise success:',sum);
},function(err){
    console.log('promise failed:',err)
});
addPromise('ok',2).then(undefined,function(msg){
    console.log('promise failed:', msg);
});