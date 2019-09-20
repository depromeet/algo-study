function solution(priorities, location) {
  var answer = 1;
  var overlapIndex = 0;

  for (var i = 0; i <= priorities.length - 1; i++) {
    // 내 문서보다 중요도가 높아?
    if (priorities[i] > priorities[location]) {
      answer++;
    }
    // 내 문서랑 중요도가 같아?
    else if (priorities[i] === priorities[location]) {
      overlapIndex = (location + 1) - answer;
    }
  }
  // 만약 location 이 3일 때 위치가 4.

  // 지금 총 갯수가 6갠데 9가 빠지면 5개가 되고, 그럼 위치가 4에서 3이 되어야 하니까 전체에서 answer만큼 빼주면 동명이인 중에서 인덱스가 구해지지 않을까?
  // 중복 숫자 갯수 = 전체 배열 길이 - 중복 아닌 숫자 갯수
  // (location + 1) = 나 자신의 위치
  // 동명이인의 인덱스 = (location + 1) - answer(1) -> 4 - 1 = 3

  // 그 인덱스를 가지고 answer + 동명이인의 인덱스를 하면 리턴 값이 나오지 않을까?
  // return 나보다 중요한 문서 갯수 + 중복 숫자 갯수
  // answer = 동명이인의 인덱스 + 중복 아닌 숫자 갯수(answer) -> 3 + 1(2) = 5
  return answer + overlapIndex;
}
