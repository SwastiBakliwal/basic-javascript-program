function add()
{
    let a = 10
    let b = 20
    c = a+b
    document.write(c)
}
function sub(a,b)
{
    c= a-b
    document.write(c)
}
function show()
{
    document.write("hello")
}
function print()
{
    let sum = 0
    for(i = 1;i<=10;i++)
    {
        sum+=i
    }
    //document.write(sum)
    return sum
}
function prints(a,b)
{
    let sum =0
    for(i=a;i<=b;i++)
    {
        sum+=i
    }
    return sum
}
let s = print()
console.log(s+"     ")
let d = prints(parseInt(20),parseInt(50))
console.log(d)