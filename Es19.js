function calculate()
{
    base = parseInt(prompt("enter base"))
    height = parseInt(prompt("enter height"))
    area_of_triangle= 1/2*base*height;
    document.writeln("Area of Triangle is "+area_of_triangle+"cm")
}
calculate()