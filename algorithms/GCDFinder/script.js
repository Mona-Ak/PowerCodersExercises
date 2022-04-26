let gcdFinder= (x , y) =>{
    let xNums = [];
    let yNums = [];
    let xFactors = [];
    let yFactors = [];
    let comonFactors = [];
    
    for(let i = 0; i <= x; i++){
        xNums.push(i);
    }
    for(let i = 0; i <= y; i++){
        yNums.push(i);
    }
    for(let i = 0; i < xNums.length; i++){      
        if(x % xNums[i] == 0 ){
            xFactors.push(xNums[i]);  
        }
    }
    for(let i = 0; i < yNums.length; i++){      
        if(y % yNums[i] == 0 ){
            yFactors.push(yNums[i]);  
        }
    }
    xFactors.map(item => {
        for(let i = 0; i < yFactors.length;i++){
            if(item == yFactors[i]){
                comonFactors.push(item);
            }
        }
    })

    let gcd = Math.max(...comonFactors);

    // console.log('this is xNums' + xNums);
    // console.log('this is yNums' + yNums);
    // console.log(xFactors);
    // console.log(yFactors);
    // console.log(comonFactors);
    // console.log(gcd);  
    
}

gcdFinder(60,80);


