function greeting(name){
    if(name==null||name.length==0||name==' '){
        console.log('Please write your name correctly');
    }else{
        console.log(`Heyya ${name} welcome to our function!`);
    }
}

function gift(name, gift){
    greeting(name);
    for(var i=0; i<gift.length; i++){
        console.log(`Hey ${name} would you like some ${gift[i]}?`);
    }
}
var foodarr = ['pizza', 'pasta', 'chinese bhel', 'paratha'];
var yname = prompt("Your name please?", "");

gift(yname, foodarr);