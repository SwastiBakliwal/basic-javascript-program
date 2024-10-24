function rev(empdetails)
{  
    for(i=empdetails.length-1;i>=0;i--)
    {
        rev = empdetails[i];
        document.write(rev+" ")
    }
}
let empdetails = [101,"swasti","QA",50000,2]
rev(empdetails)