package level2.��ųƮ��;

public class Solution2 {
////2. ArrayList�� contains -> String �� contains�� ����ؼ� ArrayList�� ������� �ʴ� ���

	public int solution(String skill, String[] skill_trees) {
		int answer = 0;
		for (String skillTree : skill_trees) {
			if (isAvailable(skill, skillTree))
				answer++;
		}
		return answer;
	}

	private boolean isAvailable(String skill, String skillTree) {
		int order = 0; // ���� ��� ���� ��ų ����
		for (int i = 0; i < skillTree.length(); i++) {
			char selectedSkill = skillTree.charAt(i); // ���� �� ��ų
			if (skill.contains(String.valueOf(selectedSkill))) { // ���ེų ��Ͽ� ������ ���ེų Ȯ�� �ʿ�
				if (selectedSkill == (char) skill.charAt(order))
					order++; // ��� �� ����
				else
					return false; // ��� �� ������ ���̻� Ȯ�� �ʿ�x false ��ȯ
			}
		}
		return true;
	}

}