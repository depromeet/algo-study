class Solution {
    public int solution(int[] priorities, int location) {
        // 말도 안되는 입력
        if (priorities.length <= location) {
            throw new IllegalArgumentException("'location' must be less than priorities length");
        }
        int answer = 1;
        for (int i = 0; true; i = (i+1) % priorities.length) {
            // 이미 존재하지않는 경우
            if (priorities[i] == -1) {
                continue;
            }
            // 못나가는경우 (뒤에 더 큰게 있어서)
            if (priorities[i] < this.max(priorities)) {
                continue;
            }
            // 나갈 수 있는 경우
            priorities[i] = -1;
            if (i == location) {
                // 얘가 진짠지
                return answer;
            }
            answer += 1;
        }
    }
    
    private int max(int[] array) {
        int max = -1;
        for(int i : array) {
            if (i > max) {
                max = i;
            }
        }
        return max;
    }
}

