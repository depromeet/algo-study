function solution(strings, n) {
  var answer = [];
  // 1. 각 단어에서 n번 째 알파벳 찾기
  // 2. 제일 작은 인덱스를 가진 단어부터 순차적으로 돌아가면서 체크
  // 3. 조건에 맞으면 push
  while (answer.length < strings.length) {
    var j = 0;
    for (var i = 0; i < strings.length; i++) {
      // console.log(String.fromCharCode(97 + i));
      if (strings[i][n] == String.fromCharCode(97 + j)) {
        answer.push(strings[i]);
      }
    }
    if (j < 5) j++;
    console.log(j);
    if (j == 5) break;
  }

  return answer;
}
