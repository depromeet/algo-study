class Solution {
    fun solution(s: String, n: Int): String = s.toCharArray().map { it ->
        getLetter(it, n)
    }.joinToString("")

    private fun getLetter(c: Char, n: Int): Char {
        val diff = 'Z' - 'A' + 1
        val letter = c + n

        return if (c == ' ') {
            c
        } else if ((c in 'a'..'z' && letter > 'z')
                || (c in 'A'..'Z' && letter > 'Z')) {
            letter - diff
        } else {
            letter
        }
    }
}