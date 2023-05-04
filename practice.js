let student=[
    {name:"Piyush",rollNumber:31},
    {name:"jenny",rollNumber:15},
    {name:"Kaushal",rollNumber:55}
]

const filterArray=student.map((item,index)=>{
    return item.name.toUpperCase()
})
console.log(filterArray)