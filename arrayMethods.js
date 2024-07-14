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

// topic-6 flat

//example 1
const arr22 = [1,[2,3],[4,[5,6]]];
const arr23 = arr22.flat();
console.log(arr23);

//example 2
const arr24 = [1,[2,3],[4,[5,6]]]
const arr25 = arr24.flat(Infinity)
console.log(arr25);

/////////////////////////////////////////////////

//topic-7 includes

//example 1
const arr26 = [1,2,3,4,5]
const arr27 = arr26.includes(2)
console.log(arr27);

//example 2
const arr28 = ['siraj','robin','soloman']
const arr29 = arr28.includes('kelvin')
console.log(arr29);

////////////////////////////////////////////////

//topic-8 indexOf

//example 1
const arr30 = [1,2,3,4,5]
const arr31 = arr30.indexOf(3)
console.log(arr31);

//example 2
const arr32 = ['lukhman','naja','reja','nahana']
const arr33 = arr32.indexOf('naja')
console.log(arr33);

////////////////////////////////////////////////

//topic-9 join

//example 1
const arr34  = [1,2,3,4,5]
const arr35 = arr34.join()
console.log(arr35);

//example 2
const arr36 = ['Hello Kelvin','How are you?']
const arr37 = arr36.join(', ')
console.log(arr37);

//////////////////////////////////////////////

// topic-10 lastIndexOf

//example 1
const arr38 = [1,2,3,4,5,1,2,3,4,5]
const arr39 = arr38.lastIndexOf(3)
console.log(arr39);

//example 2 
const arr40 = ['siraj','lukhman','ashiq','siraj','irfan','ashiq']
const arr41 = arr40.lastIndexOf('kelvin')
console.log(arr41);

/////////////////////////////////////////////

//topic-11 pop

//example 1
const arr42 = [1,2,3,4,5]
const arr43 = arr42.pop(5)
console.log(arr42);

/////////////////////////////////////////////

//topic-12 push

//example 1
const arr44 = [1,2,3,4]
const arr45 = arr44.push(5)
console.log(arr44);

//////////////////////////////////////////////

//topic-13 reverse

//example 1
const arr46 = [5,4,3,2,1]
const arr47 = arr46.reverse()
console.log(arr47);

//example 2
const arr48 =['world','Hello']
const arr49 = arr48.reverse()
const arr50 = arr48.join(' ')
console.log(arr50);

//////////////////////////////////////////////

//topic-14 unshift 

//example 1
const arr51 = [2,3,4,5]
arr51.unshift(1)
console.log(arr51);

//////////////////////////////////////////////

//topic-15 shift 

//example 1
const arr52 = [10,1,2,3,4,5]
arr52.shift(10)
console.log(arr52);

////////////////////////////////////////////

//topic-16 slice

//example 1
const arrFruits = ['Apple','Orange','Tree','Dog']
const arrRemoveOthers = arrFruits.slice(0,2)
console.log(arrRemoveOthers);

/////////////////////////////////////////////

//topic-17 some

//example 1
const arr53 = [1,5,8,13,14,15]
const check = arr53.some((arr53)=>{
    return arr53>10
})

console.log(check);
//example 2
const arr54 = [1,2,3,4,5]
const check2 = arr54.some((arr54)=>{
    return arr54>10
})
console.log(check2);

//////////////////////////////////////////////

//topic-18 every

//example 1
const arr55 = [10,11,12,13,14,15]
const check3 = arr55.every((arr55)=>{
    return arr55>11
})
console.log(check3);

//example 2
const arr56 = [10,11,12,13,14,15]
const check4 = arr56.every((arr56)=>{
    return arr56>=10
})
console.log(check4);

/////////////////////////////////////////////////

//topic-19 sort

//example 1 
const arr57 = [5,3,8,1,2]
const sortNumbers = arr57.sort()
console.log(sortNumbers);

///////////////////////////////////////////////

//topic-20 splice

//example 1
const arr58 = [1,2,3]
arr58.splice(3,0,4,5)
console.log(arr58);

//example 2
const arr59 = [1,2,3,4,5,6,7]
arr59.splice(5,5)
console.log(arr59);

///////////////////////////////////////////////

//topic-21 toString

//example 1
const arr60 =[1,2,3,4,5]
const arr61 = arr60.toString()
console.log(arr61)

///////////////////////////////////////////////

//topic-22 filter

//example 1
const arr62 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const findOddNumbers = arr62.filter((data)=>{
    if (data%2!==0){
        return data
    }
})
console.log(findOddNumbers);

//example 2
const arr63 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const findEven =arr62.filter((data)=>{
    if (data%2==0){
        return data
    }
})
console.log(findEven)

///////////////////////////////////////////////

//topic-23 reduce 

//example 1
const arr64 = [1,2,3,4,5,6,7,8,9,10]
const sumOfarr64 = arr64.reduce((acc,num)=>{
    return acc+num
})
console.log(sumOfarr64);

//example 2
const arr65 = [1,2,3,4,5,6,7,8,9,10]
const multiOfarr65 = arr65.reduce((acc,num)=>{
    return acc*num
})
console.log(multiOfarr65);

///////////////////////////////////////////////

//topic-24 map 

//example 1
const arr66 = [1,2,3,4,5,6,7,8,9,10]
const arr67 = arr66.map((element)=>{
    return element*10
})
console.log(arr67);

//example 2 
const arr68 = [1,2,3,4,5,6,7,8,9]
const arr69 = arr68.map((element)=>{
    return element+1
})
console.log(arr69);

//////////////////////////////////////////////

//topic- 24 forEach

//example 1
const arr70 = [1,2,3,4,5,6,7,8,9,10]
const arr71 = arr70.forEach((number)=>{
    console.log(number);
})

//example 2
const arrFruitss = ['Banana','Apple','Jackfruit','Grape','Pineapple']
arrFruitss.forEach((fruit,index)=>{
    console.log(index+ ': ' + fruit);
})

