package level1.���ڼ��ڼ�;

class Solution {
	public String solution(int n) {
		String waterMelon = "����";
		StringBuilder answer = new StringBuilder("");
		for (int i = 0; i < n; i++) {
			answer.append(waterMelon.charAt(i % 2));
		}
		return answer.toString();
	}
}