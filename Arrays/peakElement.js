function findPeakElemnt(){
    var arr = [1, 3, 2, 4, 1, 0];
    var n = arr.length;
    var result=[]
    if(n==1){
        return 0;
    }
    if(arr[0]>=arr[1]){
        return 0;
    }
    if(arr[n-1]>=arr[n-2]){
        return n-1;
    }
    for(var i=1;i<arr.length;i++){
        if(arr[i]>=arr[i-1] && arr[i]>=arr[i+1]){
            result.push( arr[i]);
        }
    }
    return result;
}

console.log(findPeakElemnt());