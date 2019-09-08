function solution(phone_number) {
  var answer = '';
  var lastNum = phone_number.slice(-4);
  var plusNum = '';

  for (var i = 0; i < phone_number.slice(0, -4).length; i++) {
    plusNum += '*';
  }

  return answer = plusNum + lastNum;
}
