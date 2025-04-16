//function ShowMessage() {
  //  let age = 17;
    //let Name = "James";

    //if (age >= 18) {
      //  alert("Hello" + Name + "You can now drive :");
//    }
 //   else {
   //     alert("Hello Kid" + "You can too young to drive :");
     //   let years = 18 - age;
       // alert("please come back after " + years + "years")
    //}
//    for (let i = 0; i <= 10; i = i + 1) {
//        alert("Hey, stop clicking me!");
  //  }
    //    let sum = 0;
//    for (let i = 0; i <= 10; i = i + 1) {
  //      sum = sum + i;

//    }
//    alert(sum);

//}


let count = 0;

document.getElementById('buttonCounter').onclick = function() {
    count = count + 1;
    document.getElementById('counter').innerHTML = 'Count: ' + count;

    // Check if the count is even or odd
    if (count % 2 == 0) {
        document.getElementById('counter').style.color = 'green'; // Even
    } else {
        document.getElementById('counter').style.color = 'blue'; // Odd
    }
};


document.getElementById("alertMe").addEventListener("click", function () {
    alert("Hello world!");
});

// Hover Button Functionality
document.getElementById('hoverButton').onmouseover = function() {
    document.getElementById('hoverButton').style.background = 'lightblue'; // color on hover
};

document.getElementById('hoverButton').onmouseleave = function() {
    document.getElementById('hoverButton').style.background = 'lightcoral'; // color on mouse leave
};

// This loop adds the message 5 times into the #container div
for (let i = 1; i <= 5; i = i + 1) {
    document.getElementById('container').append('No of tries I had to do this website to work ' + i, document.createElement("br"));
}


function changecolor()
{
    document.getElementById("main").style.backgroundcolor = "rgb(159, 226, 236)";
    document.getElementById("justDiv").style.backgroundcolor = "grey";

}

function resetcolor()
{
    document.getElementById("main").style.backgroundcolor = "rgb(159, 226, 236)";
    document.getElementById("justDiv").style.backgroundcolor = "grey";

}


function changetocat()
{
    document.getElementById("pet"). src="";

}

function changetodog()
{
    document.getElementById("pet"). src="";

}



