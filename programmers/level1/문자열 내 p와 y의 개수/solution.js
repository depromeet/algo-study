function solution(s) {
  var answer = "";

  var p = s.match(/p/gi) == null || "" ? 0 : s.match(/p/gi).length;
  var y = s.match(/y/gi) == null || "" ? 0 : s.match(/y/gi).length;

  return p == y ? answer = true : answer = false;
}
