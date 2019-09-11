package level2.��ųƮ��;

import java.util.*;

class Solution {
	public int solution(String skill, String[] skill_trees) {
		int answer = 0;
		ArrayList<Character> skillList = new ArrayList<Character>();
		for (int i = 0; i < skill.length(); i++)
			skillList.add(skill.charAt(i));
		for (String skillTree : skill_trees) {
			if (isAvailable(skillList, skillTree))
				answer++;
		}
		return answer;
	}

	public boolean isAvailable(ArrayList skillList, String skillTree) {
		int order = 0; // ���� ��� ���� ��ų ����
		for (int i = 0; i < skillTree.length(); i++) {
			char selectedSkill = skillTree.charAt(i); // ���� �� ��ų
			if (skillList.contains(selectedSkill)) { // ���ེų ��Ͽ� ������ ���ེų Ȯ�� �ʿ�
				if (selectedSkill == (char) skillList.get(order))
					order++; // ��� �� ����
				else
					return false; // ��� �� ������ ���̻� Ȯ�� �ʿ�x false ��ȯ
			}
		}
		return true;
	}

	//// 2. ArrayList�� contains -> String �� contains�� ����ؼ� ArrayList�� ������� �ʴ� ���

	public int solution2(String skill, String[] skill_trees) {
		int answer = 0;
		for (String skillTree : skill_trees) {
			if (isAvailable2(skill, skillTree))
				answer++;
		}
		return answer;
	}

	public boolean isAvailable2(String skill, String skillTree) {
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