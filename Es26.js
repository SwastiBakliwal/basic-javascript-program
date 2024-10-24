function sum(arr)
{
    multiples = [0];
  for(i=0 ; i<arr.length; i++)
  {
    if(arr[i]%5==0)
    {
    multiples[i] = arr[i];
  document.write(multiples[i]+"<br>")
    }
}
}
let arr = [5,25,34,24,10,15,20,67,88,76]
sum(arr)