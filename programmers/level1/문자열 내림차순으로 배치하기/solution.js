function solution(s) {
  var answer = '';
  var arr = s.split('').sort().reverse().map(x => answer += x);
  return answer;
}
