//reverse words without reversing charcters
//output= yM eman si artimus

function reverseString(){
    let str="My name is sumitra";
    let reversedString=str.split("").reverse().join("").split(' ').reverse().join(' ')
    console.log( reversedString);
}

reverseString();


//without using inbuilt function

function reverseString(){
    let str="My name is sumitra";
    let res=''
    for(let i=str.length-1;i>=0;i--){
        res=res+str[i];
    }
    console.log(res);
}

reverseString();
