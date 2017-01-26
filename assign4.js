const myArr=process.argv
console.log(`tip percentage = ${(myArr[3])}`)
let tip= Number(myArr[2])*Number(myArr[3])/100
let netamount=Number(myArr[2]) + Number(tip)
console.log(`total is = ${netamount}`)

