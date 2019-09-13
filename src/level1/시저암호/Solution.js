function solution(string, number) {
    const isEmpty = (str) => {
        return str === " ";
    }
    const isSmallLetter = (str) => {
        const charCodeOfX = str.charCodeAt();
        return 97 <= charCodeOfX && 122 >= charCodeOfX;
    }
    const isCapitalLetter = (str) => {
        const charCodeOfX = str.charCodeAt();
        return 65 <= charCodeOfX && 90 >= charCodeOfX;
    }
    const isItOver122 = (num) => {
        return num > 122;
    }
    const isItOver90 = (num) => {
        return num > 90;
    }
    const transformString = (str, number) => {
        const charCodeOfXPlusNumber = str.charCodeAt() + number;
        if (isSmallLetter(str) && isItOver122(charCodeOfXPlusNumber)) {
            return String.fromCodePoint(96 + charCodeOfXPlusNumber % 122);
        } else if (isCapitalLetter(str) && isItOver90(charCodeOfXPlusNumber)) {
            return String.fromCodePoint(64 + charCodeOfXPlusNumber % 90);
        } else {
            return String.fromCodePoint(charCodeOfXPlusNumber);
        }
    }
    return string.split("").map(str => {
        if (isEmpty(str)) {
            return ' ';
        } else if (isSmallLetter(str)) {
            return transformString(str, number);
        } else if (isCapitalLetter(str)) {
            return transformString(str, number);
        } else {
            console.log('소문자, 대문자, 공백이 아닙니다.');
        }
    }).join('');
}
