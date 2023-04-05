document.querySelector("h1").innerHTML ="How are you Mr yaseen this is comes from query selector js ";

// this is how can i make the call of exact element in my doc 
document.querySelector(".item a").innerHTML ="this ";

/*
if i need to add class to element in js i must use something called classList 
then .add method to add a class 
example :
 if you go to console and check you will find that the class is added
 and so we can use remove method that remove the class , so that toggle method 
 toggle method applies true of false like turn it on or off so if i used class toggle(first-hdr-tag) if it's applied 
 then it will turn anything applied of and the apposite is true  
*/

document.querySelector("h1").classList.add("first-hdr-tag");
document.querySelector("h1").classList.toggle("first-hdr-tag");
document.querySelector("h1").classList.toggle("first-hdr-tag");

// this example shows the whole things that i've mentioned before

/*
Let's says that we wanna add font size to everything in the document insted of going to each class in style sheet , apply the 
this thing we will make a class called huge that is extended by any element that i want to appling this class on it by 
concluding this class to its classList this is really fabulous !! is that right 

in the below example we dont need to make 
listitems =  listIems[i].classList.add("huge"); 
cause we don't have to make this step that's becouse we are selecting the whole elemnts and reching them by the length 
of already array contained called listItem and further more it will applied if i make some thing like that
listitems =  listIems[i].classList.add("huge"); it will says on the consile can't using add method for property of null 

*/

var  listIems = document.querySelectorAll(".item");

for (var i = 0; i < listIems.length; i++) {
    listIems[i].classList.add("huge");     
}


// i can acces the proparity of the elements by setAttibute("attribute" , value );

// we can add new elements inside element using DOM 
document.querySelector("h1").innerHTML = "<em> this is an emphesis tag added by js  </em>";





         

