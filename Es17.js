function largest()
{
    let max = 0;
    let num ;
    for(i=1;i<=10;i++)
    {
        num = parseInt(prompt("Enter the number"))
        if(num>max)
        {
            max=num
        }        
    }
    console.log("The largest number is "+max )
}
largest()