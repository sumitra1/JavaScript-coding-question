function capitalizeEachWord(){
    let str="my name is sumitra"
    let splitString=str.split(' ');
    for(let i=0;i<splitString.length;i++){
        splitString[i]= (splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1))
    }
    console.log(splitString.join(' '));
}

capitalizeEachWord();