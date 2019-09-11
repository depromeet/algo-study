package level2.스킬트리;

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
		int order = 0; // 현재 배운 선행 스킬 순서
		for (int i = 0; i < skillTree.length(); i++) {
			char selectedSkill = skillTree.charAt(i); // 찍어야 할 스킬
			if (skillList.contains(selectedSkill)) { // 선행스킬 목록에 있으면 선행스킬 확인 필요
				if (selectedSkill == (char) skillList.get(order))
					order++; // 배울 수 있음
				else
					return false; // 배울 수 없으면 더이상 확인 필요x false 반환
			}
		}
		return true;
	}

	//// 2. ArrayList의 contains -> String 의 contains를 사용해서 ArrayList를 사용하지 않는 방법

	public int solution2(String skill, String[] skill_trees) {
		int answer = 0;
		for (String skillTree : skill_trees) {
			if (isAvailable2(skill, skillTree))
				answer++;
		}
		return answer;
	}

	public boolean isAvailable2(String skill, String skillTree) {
		int order = 0; // 현재 배운 선행 스킬 순서
		for (int i = 0; i < skillTree.length(); i++) {
			char selectedSkill = skillTree.charAt(i); // 찍어야 할 스킬
			if (skill.contains(String.valueOf(selectedSkill))) { // 선행스킬 목록에 있으면 선행스킬 확인 필요
				if (selectedSkill == (char) skill.charAt(order))
					order++; // 배울 수 있음
				else
					return false; // 배울 수 없으면 더이상 확인 필요x false 반환
			}
		}
		return true;
	}

}