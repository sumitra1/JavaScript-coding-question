function mostFrequentCharacter(){
    let str="HEllo worldiiiiiiooooooo";
    let map={};
    for(let i=0;i<str.length;i++){
        map[str[i]]=map[str[i]]?map[str[i]]+1:1
    }
    let max=0;
    let c=str[0];
    for(let i in map){
        if(map[i]>max){
            max=map[i];
            c=i;
        }
    }
    console.log(c);
}

mostFrequentCharacter()