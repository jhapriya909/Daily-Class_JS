// document.getElementById("one").innerHTML = hi;


try{
   console.log("try block starts here");
   
   console.log(x);  // Error generate beacuse value of x is not defined

   console.log("try block ends here"); //big problem

}

catch(error)
{
 console.log("I am inside Catch block");

 console.log("your error message", error);

}


finally{
    console.log("I will run everytime");
}