package level1.�ڸ���_���ϱ�;
import java.util.*;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        int temp; //�� �ڸ����� �ӽ� ������ ����
        while(n>0){
            temp=n%10;
            n=n/10;
            answer+=temp;
        }
        return answer;
    }
}