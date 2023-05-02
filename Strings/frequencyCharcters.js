function frequencyCharacters(str){
    let map={};
    let result=[];
    for(let i=0;i<str.length;i++){
       map[str[i]]=map[str[i]]?map[str[i]]+1:1;
    }
    
    for(let i=0;i<str.length;i++){
        if(map[str[i]]>2 && result.indexOf(str[i])==-1){
            result.push(str[i]);
        }
    }
    console.log(result)
    }
    
    frequencyCharacters('cCAAaaaavv');