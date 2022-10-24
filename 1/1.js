var firstname = prompt("your firstname?", "");
var secondname = prompt("your secondname?", "");
var adjective = "tall"
console.log(`We gotta admit ${firstname} ${secondname} is ${adjective}`);
var age = prompt("How old are you?", "69");

if(age>18){
    console.log(`Hey ${firstname} welcome since you are ${age} you are allowed here`);
}else if(age<=18){
    console.log(`Unfortunately for you ${firstname} you are still too young`);
}else{
    console.log(`Bruh ${firstname} try entering a sensible age how tf is ${age} a number?.`);
}

