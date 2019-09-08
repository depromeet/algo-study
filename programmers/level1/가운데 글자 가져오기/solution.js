function solution(s) {
  var answer = '';

  if (Number(s.length) % 2 == 0) {
    // 나머지가 0일 때 (s가 짝수일 때)
    answer = s.substr(Math.floor(s.length / 2) - 1, 2);
  } else {
    answer = s.substr(s.length / 2, 1);
  }

  return answer;
}
