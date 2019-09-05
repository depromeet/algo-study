function solution(s) {
    for(var element of s.split("")) {
        const elementCharCode = element.charCodeAt();
        if(elementCharCode <= 47 || elementCharCode >= 58) {
            return false;
        }
    }
    if(s.length === 4 || s.length === 6) {
        return true;
    }
    return false;
}
