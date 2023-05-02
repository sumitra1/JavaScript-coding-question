function checkPalindrome(){
    let str="anioa";
    let rev=str.split('').reverse().join('');
    
        if(str==rev){
            console.log("palindrome")
        }else{
            console.log("not palindrome")
        }
}

checkPalindrome();

function checkPalindrome(){
    const string = "12321"
    let len = string.length;
    for (i=0; i<len/2;i++){
      if (string[i]!==string[len-1-i]){
          return ("Not Palindrome")
      }
    }
    return "palindrome"
 }
 console.log(checkPalindrome())