/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0
    
    for(let i = 0; i < sentences.length; i++) {
        max = Math.max(max, sentences[i].trim().split(" ").length)
    }  
    
    return max
};