function checkPrime(num){
    
    let count = 0;
    for(i=2;i<=num;i++){
        if(num % i == 0){
            count ++ ;
        }
    }
}

// condition
if(count == 2){
    console.log("Prime");
}else {
    console.log("Not a Prime");
}