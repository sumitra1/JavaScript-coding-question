function sort012(){
    //counting sort
    let arr=[0,2,2,1,2,1,0,2,1];
    let f=0, s=0,t=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            f++;
        }else if(arr[i]==1){
            s++;
        }else{
            t++;
        }
    }

    for(let i=0;i<f;i++){
        arr[i]=0;
    }
    for(let i=f;i<f+s;i++){
        arr[i]=1;
    }
    for(let i=f+s;i<f+s+t;i++){
        arr[i]=2;
    }
    console.log(arr)
}