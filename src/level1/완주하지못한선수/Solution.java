package level1.�����������Ѽ���;
import java.util.*;
class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        Map<String,Integer> hashMap = new HashMap<String,Integer>();
        for(String one : participant){
            Integer num = (Integer)hashMap.get(one);   //�̸��� ���� �ο�
            if(num == null){        //num �� null �̸� ���� �ش� �̸��� ���� �ο��� �ƹ��� ����
                hashMap.put(one,1);
            }
            else{
                num++;
                hashMap.put(one,num);
            }
        }
        for(String one : completion){
            Integer num = (Integer)hashMap.get(one);   //�̸��� ���� �ο�
            num--;
            hashMap.put(one,num);
        }
        for(Map.Entry<String,Integer> one : hashMap.entrySet() ){
            if( (Integer)one.getValue() > 0){
                answer=one.getKey();
                return answer;
            }
        }
        return answer;
    }
    
    
    
    ///////Iterator ���
    public String solution2(String[] participant, String[] completion) {
        String answer = "";
        Map<String,Integer> hashMap = new HashMap<String,Integer>();
        for(String one : participant){
            Integer num = (Integer)hashMap.get(one);   //�̸��� ���� �ο�
            if(num == null){
                hashMap.put(one,1);
            }
            else{
                num++;
                hashMap.put(one,num);
            }
        }
        for(String one : completion){
            Integer num = (Integer)hashMap.get(one);   //�̸��� ���� �ο�
            num--;
            hashMap.put(one,num);
        }
        Set keySet = hashMap.keySet();      //keySet�� �̾Ƽ�
        Iterator iter = keySet.iterator();  // Iterator �� ���
        while(iter.hasNext()){
            String nextKey= (String)iter.next();
            if( (Integer)hashMap.get(nextKey) > 0 ){ //hashMap�� �ο��� 0�̻��̸� ������� ���� �ο�
                answer = nextKey;
                return answer;
            }
        }
        return answer;
    }
    
}