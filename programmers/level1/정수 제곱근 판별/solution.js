function solution(n) {
  var answer = Math.sqrt(n) - parseInt(Math.sqrt(n)) === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
  return answer;
}
