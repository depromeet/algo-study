package level1.���ڿ�_��_p��y�ǰ���;

class Solution {
	boolean solution(String s) {
		s = s.toUpperCase();
		int num = 0;
		for (int i = 0; i < s.length(); i++) {
			char currentChar = s.charAt(i); // ���� ����
			if (currentChar == 'P')
				num++;
			else if (currentChar == 'Y')
				num--;
		}
		return num == 0 ? true : false;
	}
}