function solution(n) {
  var answer = n.toString().split("").reverse().map(x => Number(x));
  return answer;
}
