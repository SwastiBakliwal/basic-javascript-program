const arr = [2,4,3,8,5]
for(let i = 0 ; i<arr.length/2 ; i++)
{
    const temp = arr[i]
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}
document.write(arr)