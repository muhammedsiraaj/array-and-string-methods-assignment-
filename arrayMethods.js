//topic-1 concat

// example 1
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

const concatExample1 = arr1.concat(arr2)

console.log(concatExample1);

//example 2
const arr3 = [1,2,3,4,5]
const arr4 = [6,7,8,9,10]
const arr5 = [11,12,13,14,15]

const concatExample2 = arr3.concat(arr4,arr5)

console.log(concatExample2);

///////////////////////////////////////////////////////////

//topic-2 every

//example 1
const arr6 = [1,2,3,4,5,6,7,8,9,10]
const arr7 = arr6.every((arr6)=>{
    return arr6>5
})

console.log(arr7);

//example 2
const arr8 = [1,2,3,4,5,6,7,8,9,10]
const arr9 = arr8.every((arr8)=>{
    return arr8>0
})

console.log(arr9);

///////////////////////////////////////////////////////////

// topic-3 fill

//example 1
const arr10 = [1,2,3]
const arr11 = arr10.fill(4)

console.log(arr11);

//example 2
const arr12 = ['siraj','robin','zayan']
const arr13 = arr12.fill('Entri Learner')

console.log(arr13);

////////////////////////////////////////////////////////

//topic-4 find

//example 1
const arr14 = [5,8,12,15,20]
const arr15 = arr14.find((arr14)=>{
    return arr14>10
})

console.log(arr15);

//example 2
const arr16 = [10,20,25,30,35]
const arr17 =arr16.find((arr16)=>{
    return arr16>30
})

console.log(arr17);

///////////////////////////////////////////////////////

// topic-5 findIndex

//example 1
const arr18 = [5,8,12,15,20]
const arr19 = arr18.findIndex((arr18)=>{
    return arr18>10
})

console.log(arr19);

//example 2
const arr20 = [10,20,25,30,35]
const arr21 =arr20.findIndex((arr20)=>{
    return arr20>30
})

console.log(arr21);

////////////////////////////////////////////////////
