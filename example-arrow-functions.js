var names=['Jerry', 'terry', 'tom', 'jean'];

// names.forEach(function(name){
//     console.log('forEach', name);
// });

// names.forEach((name)=>{
//     console.log('arrow function:',name);
//     console.log('sth. else');    
// });

// names.forEach((name)=>console.log('2nd arrow',name));

var returnMe = (name)=>name + '!';

console.log(returnMe('Terry'));

var person = {
    name: 'Terry',
    greet: function(){
        names.forEach((name)=>{
            console.log(this.name + ' says hi to '+name);
        });
    }
};

person.greet();

//Challenge area
function add(a,b){
    return a+b;
}

console.log(add(1,3));
console.log(add(9,1));

var addSt = (a,b)=>{
    return a+b;
}

console.log(addSt(3,6));
console.log(addSt(3,7));

var addExp = (a,b)=>(a+b);
console.log(addExp(2,3));
console.log(addExp(9,9));