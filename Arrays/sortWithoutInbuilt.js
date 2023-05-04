function sortArray(){
    let arr=[2,1,5,4,8,7];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp

            }
        }
    }
    console.log(arr);
}

sortArray()

//find length

var a = [1,2,3,4,5];

function arrayLength(a){
  var length = 0;
  while(a[length]!==undefined){
    length++;
  }
  return length;
}

console.log(arrayLength(a)); 