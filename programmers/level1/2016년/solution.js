function solution(a, b) {
    var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var answer = day[new Date('2016-'+ a + '-' + b).getDay()];
    
    return answer;
}