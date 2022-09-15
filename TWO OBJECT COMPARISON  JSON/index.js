let obj1 = {
    "name":"Person1",
    "age":5
   
   
}
let obj2 ={
   "age": 5,
   "name":"Person1"
}
// here two objects are same but they in inappropriate order.
// first lets try a method

// console.log(obj1 == obj2) //? false
// console.log(obj1 === obj2)//? false
// the reason it gives false is obj1 stores in different memory as well as obj2 stores in different memory 
// so it cannot compare

// to compare we should create function

let objcomp = (obj1 ,obj2)=>{
   //here Object.keys is used so it gives the key value in array format.
   let objkey = Object.keys(obj1)
   let objkey2 = Object.keys(obj2)
   // to compare whether it is same we should have to find the length. if the obj  = age ,name, height and 
   // obj2 = age ,name it is not equal we should not compare .so we are using length of to find
   if (objkey.length != objkey2.length){
       return false
   }
   // to find the values present in the both obj and obj2 we are using for of method because we are using the array to print 
   // so it prints the array line by line
   // for ex if we want to print the name of the obj1 we obj.name likewise, in here we use obj1[obb]. obb is the key of the 
   //objkey which is [name , age].
   // if the values of both obj1 and obj2 is equal it should be true or else it should be false
  for ( let obb of objkey ){
      if (obj1[obb] != obj2[obb]){
          return false
      }
      
  }return true
}
let final =objcomp(obj1,obj2)
console.log(final)

//by comparing the values it prints true or else it will false
//EXAMPLE for true

let data1 ={
   "height_cm":170,
   "weight_kg":80,
   "hip_size":34
}
let data2={
   "hip_size":34,
   "height_cm":170,
   "weight_kg":80,
}
let da_ta = (data1,data2)=>{
   const datakey1 =Object.keys(data1);
   const datakey2 =Object.keys(data2);
   if (datakey1.length != datakey2.length){
       return false
   }
   for (let datak of datakey1){
       if (data1[datak] != data2[datak]){
           return false
       }
   }return true
}
let finaldata =da_ta(data1,data2)
console.log(finaldata);

//EXAMPLE For false
let data3 ={
   "height_cm":170,
   "weight_kg":70,
   "hip_size":34
}
// In here both the object are unequal so the result will be false
let data4={
   "hip_size":24,
   "height_cm":170,
   "weight_kg":85,
}
let datta = (data3,data4)=>{
   const datakey3 =Object.keys(data3);
   const datakey4 =Object.keys(data4);
   if (datakey3.length != datakey4.length){
       return false
   }
   for (let datac of datakey3){
       if (data3[datac] != data4[datac]){
           return false
       }
   }return true
}
let finaldata2 =datta(data3,data4)
console.log(finaldata2);
