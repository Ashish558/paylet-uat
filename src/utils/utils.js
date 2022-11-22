

export const checkIfIdExist = (id, arr, keyToCheck)=>{
 const data = arr.find(item => item[keyToCheck] === id)
 return data ? true : false
//  return data
}