function longestSubstringWithoutRepeating(){
    let str="abcvvvabb"
    let end=0;
    let start=0;
    let maxLength=0;
    const uniqueCharcaters=new Set();
    while(end<str.length){
        if(!uniqueCharcaters.has(s[end])){
            uniqueCharcaters.add(s[end]);
            end++;
            maxLength=Math.max(maxLength,uniqueCharcaters.size)
        }else{
            uniqueCharcaters.delete(str[start]);
            start++;
        }
    }
    return maxLength;
}