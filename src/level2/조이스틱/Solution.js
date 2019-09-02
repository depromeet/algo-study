function solution(name) {
    const upDownCountArray = name.split("")
        .map((x, i) => name.charCodeAt(i) - 64)
        .map(x => {
            // 1 <= x <= 14, 정방향
            if(x < 15){
                return x - 1;
            }
            // 15 <= x <= 26, 역방향
            else{
                return 27 - x;
            }
        });
    // name에서 연속된 A 검색
    const beMatchedA = name.match(/(A*)/g);
    // 가장 연속적이고 긴 A 문자열
    const theMostLongerA = beMatchedA.filter(x => x.length > 0).sort((a, b) => a.length < b.length)[0];
    // 가장 긴 A 문자열의 위치
    const leftElementOfA = beMatchedA.indexOf(theMostLongerA);
    // 좌우 방향으로 레버를 움직여야 하는 횟수
    const upDownCount = upDownCountArray.reduce((acc, val) => acc + val);
    try{
        const leverCount = upDownCount + name.length - theMostLongerA.length + leftElementOfA - 2;
        // A가 2개 이상 연속될 경우
        if(theMostLongerA.length >= 2){
            // A 문자열이 앞에 위치함.
            if(leftElementOfA === 0){
                return upDownCount + name.length - theMostLongerA.length;
            }
            // A 문자열이 뒤에 위치함.
            else if(beMatchedA.indexOf(theMostLongerA) === beMatchedA.length - 2){
                return upDownCount + name.length - theMostLongerA.length - 1;
            }
            // A 문자열이 중간에 위치함.
            else if(leverCount > 0){
                return leverCount;
            }
            // A 문자열로만 이루어져 있음.
            else if(beMatchedA.filter(x => x !== theMostLongerA).length === 1){
                return 0;
            }
        }
        // A의 연속이 없을 경우
        else{
            // A가 두 번째 순서에 위치함.
            if(name.indexOf('A') === 1){
                return upDownCount + name.length - 2;
            }
            else{
                return upDownCount + name.length - 1;   
            }
        }
    }
    // A 문자열이 존재하지 않음.
    catch(e){
        return upDownCount + name.length - 1;
    }
}
