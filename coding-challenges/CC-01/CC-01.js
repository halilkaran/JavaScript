 const sentences = "My name is Halil. I come from Turkey.";
 const reversedArray = function(sentences)  {
   const array1 = sentences.split(" ");
   let array2 = [];

   console.log(array1);
   for (word of array1) {
     let splittedString = word.split("");
     let reversedStr = splittedString.reverse();
     let array3 = reversedStr.join("");

     array2.unshift(array3);
   }
   console.log(
     ` Your sentences     is  =>>  "${sentences}" \n Reversed Sentences is  =>>  "${array2.join(
       " "
     )}"`
   );
 };

reversedArray(sentences);
 


//**----------   SHORT Answer ------------------ */
const cumle = "hadi gel köyüze geri dönelim";

function ters(string) {
  return string.split("").reverse().join("");
}

console.log(ters(cumle));
4;
