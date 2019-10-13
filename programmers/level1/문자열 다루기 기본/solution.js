function solution(s) {
  var result = s.split("").map(x => isFinite(x));
  var answer = result.filter(t => t === false) == "" ? true : false;

  return s.length == 4 || s.length == 6 ? answer : answer = false;
}
