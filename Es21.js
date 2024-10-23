//find the smallest value in a array
function smallest()
{
    let arr = [50,40,20,10,90,45]
    let min = Infinity;
    let max = -Infinity;
    for(let item of arr){
        if(item<min)
            min = item;
        if(item>max)
            max = item; 
    }
    console.log("Smallest is "+min+"  ")
        console.log("Largest is "+max)
}
smallest()