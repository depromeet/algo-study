package level1.����_���ڴ�_�Ⱦ�;

import java.util.*;

public class Solution {
	public int[] solution(int []arr) {
        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        int temp=arr[0];      //�ٷ� ���� ���ڿ� �ߺ� ���ϱ� ���� �ӽ� ����
        arrayList.add(temp);  //ù ���� �翬�� �ߺ����� ���� ���̹Ƿ� �־��ְ� ����
        for(int i=1; i < arr.length; i++){
            if( temp != arr[i] )
                arrayList.add(arr[i]);
            temp=arr[i];
        }
        int [] answer = new int[arrayList.size()];
        for(int i=0; i<arrayList.size(); i++) answer[i] = arrayList.get(i);
        return answer;
	}
}
