// 1. Write a program to check the age of a person and produce output "Adult" if age is 18 or above, "Young" if age is between 13 and 17, and "Old" if age is 65 or above.
var prompt=require("prompt-sync")();
var age=prompt("enter your Age");

if(age >18 && age <65)
{
  console.log("Adult");
}

else if(age>=13 && age <18)
{
  console.log("Young");
}

else if (age>65){
  console.log("old");
}

else{
  console.log("Age group not mentioned")
}