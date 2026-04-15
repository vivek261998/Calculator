function operation(a,b, operator)
{
        console.log("Addition function called");
        let result=0;
if(operator == "+"){
 result= Number(a) + Number(b);
}
else if(operator == "-"){
 result= Number(a) - Number(b);
}
else if(operator == "*")
{
 result= Number(a) * Number(b);
}
else if(operator == "/")
{
 result= Number(a) / Number(b);
}
return result;
}



// function substract(c,d)
// {
// let result = Number(c) - Number(d)
// return result;
// }

// function multiply(e,f)
// {
// let result = Number(e) * Number(f)
// return result;
// }

// function division(e,f)
// {
// let result = Number(e) / Number(f)
// return result;
// }

// function means(e,f)
// {
// let result = (Number(e) + Number(f))/2
// return result;
// }

// const multiply = function(x, y) {
//   return x * y;
// };


