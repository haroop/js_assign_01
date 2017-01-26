const myArr1 = process.argv

let output = Number(myArr1[2]) + Number(myArr1[3])

if (output >10 && output<100) {
    console.log(`greater than 10 and smaller than 100,value is $(output)`)
    
}
else if (output >100 && output<1000)
{
     console.log(`greater than 100 and smaller than 1000,value is $(output)`)
}