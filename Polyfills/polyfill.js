//arr.map((num,i,arr)=>{})

Array.prototype.myMap=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;
}

//arr.filter((num,i,arr)=>{})

Array.prototype.myFilter=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i])
    }
    return temp;
}

//arr.reduce((acc,curr,i,arr)=>{},initialValue)
// arr.reduce((acc,curr,i,arr)=>{
//     return acc+curr
// },0)

Array.prototype.myReduce=function(cb,initialValue){
    var accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
}