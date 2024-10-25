let emp = [];
for( i =0 ;i<5;i++)
{
    emp[i]=parseInt(prompt("enter salary"))
}
let arr =sal(emp);
console.log(arr);  
function sal(emp)
{
 let newarr = [];
 let j =0;
 for(let i =0;i<5;i++)
 {
    newarr[j]=parseInt(((emp[i]*10)/100)+emp[i]);
    j++;
 }
  return newarr;
}
sal()