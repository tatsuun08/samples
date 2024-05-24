let str = "Hello World";

function reverse_str(str){
    let reversed = "";
    for (let i=str.length-1; i>=0 ; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(str);

console.log(reverse_str(str));