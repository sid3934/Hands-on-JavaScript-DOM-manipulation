function hello(name){
    if(name==null || name==''){
        console.log("Please share your name with us :(");
    }else{
        console.log(`Hey ${name} welcome to the function.`);
    }
}
var yname = prompt("Your name?", "");
hello(yname);

