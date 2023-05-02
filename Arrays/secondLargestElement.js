function secondLargest(arr){
// const arr = [1, 2, 5, 5, 6]
const max = Math.max(...arr)
const newArr = arr.filter(element => element !== max)
const newMax = Math.max(...newArr)//5
const secondLargest = arr.filter(element => element === newMax)
console.log(secondLargest)//[5,5]
}

secondLargest([1, 2, 5, 5, 6])

////2nd way

function secondLargest(){
    let a=[1,45,,56,56,45,7];
    let firstLargest=Number.MIN_SAFE_INTEGER;
    
    for(let i=0;i<a.length;i++){
        if(a[i]>firstLargest){
            firstLargest=a[i];
        }
    }
    let second_Largest=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<a.length;i++){
        if(a[i]>second_Largest && a[i]<firstLargest){
           second_Largest=a[i];
        }
    }
    console.log(second_Largest);
}

secondLargest()



