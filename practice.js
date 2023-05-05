const input = {
  A: "12",

  B: 23,

  C: {
    P: 23,

    O: {
      L: 56,
    },

    // Q: [1, 2],
  },
};


// { A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }

const flattenObject=(inputObj,prefix)=>{
    console.log(prefix);
    let outputObj={};
    for(const [key,value] of Object.entries(inputObj)){
        const newKey=prefix? prefix+'.'+key: key;
        // console.log(key,value);
       if(typeof value!=="object"){
        outputObj[newKey]= value;
       }else{
        const outputObj2= flattenObject(value,newKey);  
        outputObj={...outputObj,...outputObj2};
       }
    }
    return outputObj;  
}

console.log(flattenObject(input));





