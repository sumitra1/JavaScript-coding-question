function checkAnagram(str1, str2){
    let a=str1.toLowerCase().split('').sort().join();
    let b=str2.toLowerCase().split('').sort().join();
    if(a==b){
        console.log("anagram")
    }else{
        console.log("not anagram")
    }
}

checkAnagram('mary','army')