package level1.�Ҽ�_ã��;

class Solution {
  public int solution(int n) {
      //���� ������ n�� 2�̻��̰� 2�� �Ҽ��̹Ƿ� 1������ �����Ѵ�.
      int answer = 1;
      //2�� �̹� �Ҽ��� ������ ���������� 3���� �Ҽ��� ã�´�
      for(int i=3; i<=n; i++){
          boolean flag=false;
          for(int j=2; j<=Math.sqrt(i); j++){
              if(i%j==0) {
                  //�̹� �������� ���� �ִٸ� �� �̻� �Ҽ��� �ƴϹǷ� break������ Ż��
                  flag = true;
                  break;
              }
          }
          if(flag==false) answer++;
      }
      return answer;
  }
}