const fibonacci = (number) => {
    let Fn= 1;
    if (number >2) {
        Fn = fibonacci(number-1) + fibonacci(number-2); 
    }  
    return Fn;
}
console.log(fibonacci(12)); 

 