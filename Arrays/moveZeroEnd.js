function moveZerosEnd(){
 
    let arr=[01,2,3,4,0,6,0,78,90,0]
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[count++]=arr[i];
        }
    }
    while(count<arr.length){
        arr[count++]=0;
    }
    console.log(arr);
}

moveZerosEnd();