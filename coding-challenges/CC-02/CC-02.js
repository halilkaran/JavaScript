const fibonacci = (number) => {
    let summ= 1;
    if (number >2) {
        summ = fibonacci(number-1) + fibonacci(number-2); 
    }
        
     
    return summ;
}
console.log(fibonacci(16)); 

