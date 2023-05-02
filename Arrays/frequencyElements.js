function frequencyElements(){
    let arr=[2,3,4,5,5,5,56,6,67,7,7]
    let map={};
    let result=[];
    for(let i=0;i<arr.length;i++){
        map[arr[i]]=map[arr[i]]?map[arr[i]]+1:1
    }
    // console.log(map);

    for(let k in map){
        if(map[k]==2){
            result.push(k)
        }
        // console.log(map[k])
    }
    console.log(result);
}

frequencyElements();
