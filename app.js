
let computer = +prompt ("head for computer");
let player = +prompt("tail for player")
let result = Math.floor(Math.random()*2)
if(result == 1){
    document.write("computer win")
}else{
    document.write("player win")
}
console.log(result)
