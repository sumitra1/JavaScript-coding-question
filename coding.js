function removeDuplicateCharacters(str){
    let arr=str.split("").filter((item,index)=>{
        return str.indexOf(item)==index
    }).join("")
    return arr;
}

//split method helps to split the strings into array of substring/characters based on parameter which we are passing
// If the separator is an empty string ('') then every character of the string is separated.
//filter method return a new array based on condition , here the condition is to find element which already occured once
//as indexOf returns the position of first ocuurance of that element and when it is checking for an elememt it compare with 
//current index and  the element's index as it is occuring first time so this will return true and filter will store that that 
//element in new array as unique and else if it return false because in 2nd time if again some repeated character comes it returns 
//false as indexOf returns 1st occurance inde and current index is not same and then we joined with 

console.log(removeDuplicateCharacters("sumitra kumari shaw"));

function removeDuplicates(arr){
    let unique=[];
    arr.forEach((item)=>{
        if(!unique.includes(item)){
            unique.push(item);
        }
    })
return unique;
}

console.log(removeDuplicates(["mango","apple","mango","apple"]))


function checkAnagram(str1, str2){
    let a=str1.toLowerCase().split('').sort().join('');
    let b=str2.toLowerCase().split('').sort().join('');
 
    if(a==b){
     console.log("anagram");
    }else{
     console.log("not anagram");
    }
 }
 checkAnagram("army","mary")
 
 
 
 