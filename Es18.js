function interest(p ,r, t)
{
    let simple_interest =(p*r*t)/100;
    document.write("The simple interest is "+simple_interest)
    return simple_interest
}
interest(parseInt(80000),parseInt(2),parseInt(3))