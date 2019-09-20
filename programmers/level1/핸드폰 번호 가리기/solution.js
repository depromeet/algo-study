function solution(phoneNumber) {
  var answer = '';
  var lastNum = phoneNumber.slice(-4);
  var plusNum = '';

  for (var i = 0; i < phoneNumber.slice(0, -4).length; i++) {
    plusNum += '*';
  }

  return answer = plusNum + lastNum;
}
