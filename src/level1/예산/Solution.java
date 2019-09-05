package level1.����;

import java.util.*;

class Solution {
	public int solution(int[] d, int budget) {
		int answer = 0;
		Arrays.sort(d); // ���Ǹ��� ��ġ�� ������ ���� �ƴϰ� ���� �ִ��� ���� ��ǰ�� ��°� ����
		for (int price : d) { // ������������ ����
			if (budget >= price) {
				budget -= price;
				answer++;
			} else
				return answer; // ���� ���꺸�� �ش� ������ ��θ� �� �̻� ���� �Ұ�
		}
		return answer;
	}
}