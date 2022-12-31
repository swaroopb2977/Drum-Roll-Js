/*
Method 1 of knowing of clicking of button

document.querySelector(".set").addEventListener("click",function () {
    alert("I got clicked");
});

*/

// Method 2

for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelector("button")[i].addEventListener("click",function () {
        alert("I got clicked");
    });
}