package level1.�輭��ã��;

class Solution {
	public String solution(String[] seoul) {
		String answer = "";
		for (int i = 0; i < seoul.length; i++) {
			if (seoul[i].contains("Kim"))
				return answer = String.format("�輭���� %d�� �ִ�", i);
		}
		return answer;
	}
}