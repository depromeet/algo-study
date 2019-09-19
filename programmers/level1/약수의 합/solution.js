function solution(n) {
  var answer = 0;
  var num = [];

  for (var i = 0; i <= n; i++) {
    (n % i === 0) ? num.push(i) : "";
  }
  
  for (var j of num) {
    answer += j;
  }

  return answer;
}
