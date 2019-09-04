function solution(answers) {
    var answer = [];
    var answer1 = [1, 2, 3, 4, 5]; // 1번의 답
    var answer2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 2번의 답
    var answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 3번의 답
    
    var a1 = 0 // 1번이 맞춘 개수
    var a2 = 0 // 2번이 맞춘 개수
    var a3 = 0 // 3번이 맞춘 개수
    
    while(answers.length > 0){
        // 1. 각 수포자의 반복되는 답이 최대 갯수(10,000)만큼 되도록 루프
        if(answer1.length < 10000){
            for(var j = 0; j < answers.length; j++){
                // 각 배열의 0번 째 인덱스부터 순차적으로 push 해서 배열을 늘림 
                answer1.push(Number(answer1[j]));
                answer2.push(Number(answer2[j]));
                answer3.push(Number(answer3[j]));
            }
        }else{
            break;
        }
    }
    // 최대 갯수를 한계로 설정하도록 배열의 수를 제한함
    answer1.splice(10000);
    answer2.splice(10000);
    answer3.splice(10000);
    
    // 2. 각 수포자가 맞춘 개수 비교해서 구하기
    for(var i = 0; i < answers.length; i++){
        if(answers[i] == answer1[i]){ a1++; }
        if(answers[i] == answer2[i]){ a2++; }
        if(answers[i] == answer3[i]){ a3++; }
    }

    // 3. 수포자 중 가장 많이 맞춘 수포자를 뽑아 answer 배열에 담아줌
    var maxA = Math.max(a1, a2, a3);
    
    if(maxA == a1){ answer.push(1); }
    if(maxA == a2){ answer.push(2); }
    if(maxA == a3){ answer.push(3); }
   
    // 4. 가장 많이 맞춘 수포자가 여러 명일 때 오름차순으로 정렬
    answer.sort((a, b) => a - b); 
    
    return answer;
}