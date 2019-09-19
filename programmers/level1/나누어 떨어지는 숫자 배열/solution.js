function solution(arr, divisor) {
  var answer = [];

  for (var i = 0; i < arr.length; i++) {
    (arr[i] % divisor === 0) ? answer.push(arr[i]) : "";
  }

  return (answer.length === 0) ? [-1] : answer.sort(function (a, b) { return a - b; });
}
