class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const count = {};

        for(const ch of s) {
            count[ch] = (count[ch] || 0) + 1;
        }

        for(const ch of t) {
            if(!count[ch]) {
                return false;
            }
            count[ch]--;
        }
        return true;
    }
}
