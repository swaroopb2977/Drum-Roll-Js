/*
Method 1 of knowing of clicking of button

document.querySelector(".set").addEventListener("click",function () {
    alert("I got clicked");
});

*/

// Method 2

for (var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",Sound);

    function Sound()
    {
        this.style.color="Orange";

    }
}
/*


if(i<4)
        {
            this.style.color="white";
            var audio=new Audio("sounds/tom-"+(i+1)+".mp3");
            audio.play();
        }

        else if(i==4)
        {
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if(i==5)
       {
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        
        }

        else{
            
            this.style.color="white";
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
        }

    









///////////////////////////////////////////////////////////
    if(i<4)
    {
        function Sound()
        {
            var audio=new Audio("sounds/tom-"+(i+1)+".mp3");
            audio.play();
        }
    }
    else if(i===4)
    {
        function Sound()
        {
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        }
    }
    else if(i===5)
    {
        function Sound()
        {
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
    }
    else{
        function Sound()
        {
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        }
    }
   
*/

