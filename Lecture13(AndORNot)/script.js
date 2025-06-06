// And Operator
const userAge = 24;

const isSchoolStudent = (userAge >= 5) && (userAge <=18);

const isCollegeStudent = (userAge >= 18) && (userAge <=24);

console.log(isCollegeStudent);

// Or Operator

const isStudent = isSchoolStudent || isCollegeStudent

// if dono se koi ek bhi shi hua to true return hoga

const andResult = Boolean("" && "hello1");
//first case is empty and return false in first case

const orResult  = Boolean("" || "Hello2");
//first case khali tha yani ki false tha isiliye second case pe gya aur wha usko true mila

//Machine
/*
EVM
criteria 18 se jyada age hai
usko vote dene do
(addhar dekho uska age 18 se jyada hai to vote dene do)

criteria 18 se kum hai
usko vote mat dene do(false or rejected)

age = (input);
const voteToday = (Age <= 18  ) && (age > 18)
ifvotetoday return true
console.log("Vote dene do")
*/

const addResult1 = Boolean('Hello1' && null); //false
const addResult2 = Boolean('Hello2' || null); //true

// Next case

const addResult3 = Boolean('Hello' && 4+4); //zero
const orResult3  = Boolean('Hello' || 4+8*5);


// Next case

// bitwise operator

/*
   00000000000000000000000000000101
&& 00000000000000000000000000000011
-----------------------------------
   00000000000000000000000000000001 


      00000000000000000000000000000101
|     00000000000000000000000000000011
    -----------------------------------
      00000000000000000000000000000111   (jo ki decimal mein `7` hai)

*/
/*
let kuch_bhi = Date();
alert(kuch_bhi);
*/
// Not operator (true ko false bna dega) (false ko ture bna dega)
let isLoggedIn = true;
console.log(!isLoggedIn);