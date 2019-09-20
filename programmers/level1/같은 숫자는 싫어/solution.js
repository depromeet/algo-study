function solution(arr) {
  var answer = [];

  // 1. 반복문을 통해 순서대로 체크
  for (var i = 0; i < arr.length; i++) {
    // 2. 만약 내 뒤의 숫자가 나와 같지 않다면 배열에 push 
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
