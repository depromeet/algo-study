package level2.������;

import java.util.*;
class Solution { 
    public class Document { //� ��������(index)�� �߿䵵 �Ѵ� �ʿ��Ͽ� class�� ����
        private Integer index=0;
        private Integer priority;
        public Document(Integer index,Integer priority) {
            this.index = index;
            this.priority = priority;
        }
        public Integer getIndex(){
            return this.index;
        }
        public Integer getPriority(){
            return this.priority;
        }
    }   
    public int solution(int[] priorities, int location) {
        int answer = 0;  //���°�� ��������
        Queue<Document> printerQueue = new LinkedList<Document>();
        //ū ���� �켱������ �켱����ť�� ����
        PriorityQueue<Integer> PriorityQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
        int index=0;
        for (int priority : priorities){
            printerQueue.offer(new Document(index,priority));
            PriorityQueue.offer(priority);
            index++;
        }
        while (! printerQueue.isEmpty()){ //������� ���� ����
            Document document = printerQueue.peek();
            if(document.getPriority() >= PriorityQueue.peek() ){ //���� ���� �μ��û���� ���� �켱������ ���ٸ� ���
                answer++;
                if(document.getIndex() == location) return answer;
                printerQueue.poll();
                PriorityQueue.poll();
            }
            else{ //���� ���� �μ��û���� �켱������ ���� ���� ������ �ǵ� ������ �ٽ� �ѱ�
                Document docu = printerQueue.poll();
                printerQueue.offer(document); 
            }
        }
        return answer;
    }
}