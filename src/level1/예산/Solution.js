function solution(d, b) {
    const amountRequested = d;
    const isMinus = (num) => {
        return num < 0;
    }
    let result = 0;
    let budget = b;
    
    amountRequested.sort((a, b) => {
      return a - b;  
    })
    
    for (let i = 0; i < amountRequested.length; i++) {
        budget -= amountRequested[i];
        if (isMinus(budget)) {
            break;
        }
        else {
            result++;
        }
    }
    return result;
}
