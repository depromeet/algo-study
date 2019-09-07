package level1.���ڿ���_������_�ٲٱ�;

class Solution {
	public int solution(String s) {
		int answer = 0;
		int sign = 1; // ��ȣ 1�̸� + -1 �̸� -
		int index = 0;
		char[] letter = s.toCharArray();
		int maxDigit = (int) Math.pow(10, letter.length - 1);
		if (letter[0] == '-' | letter[0] == '+') {
			if (letter[0] == '-')
				sign = -1;
			index++;
			maxDigit /= 10;
		}
		while (maxDigit >= 1 && index < letter.length) {
			int n = letter[index] - '0';
			answer += maxDigit * n;
			maxDigit /= 10;
			index++;
		}
		return sign * answer;
	}
}