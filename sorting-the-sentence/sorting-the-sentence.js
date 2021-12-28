/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.trim().split(" ")
    let ans = []
    
    for(let i = 0; i < s.length; i++) {
        let num = Number(s[i].match(/\d+/)[0])
        
        ans[num - 1] = s[i].replace(num, "")
    }
    
    return ans.join(" ")
};