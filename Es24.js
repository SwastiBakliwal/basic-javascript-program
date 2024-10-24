function sum(arr)
{
    oddsum = 0;
    evensum =0;
  for(i=0 ; i<arr.length; i++)
  {
    
    if(arr[i]%2!=0)
    oddsum += arr[i];
    if(arr[i]%2==0)
    evensum += arr[i];
  }
  document.writeln("Sum of even is "+evensum)
  document.writeln("Sum of odd is "+oddsum)
}
let arr = [1,2,3,4,5,6]
sum(arr)