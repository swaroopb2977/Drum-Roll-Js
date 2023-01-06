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
        var buttoninnerHtml=this.innerHTML;

        switch(buttoninnerHtml)
        {
            case "w":
                var tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "k":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "l":
                var kick_bass=new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break;
            
            default:
                break;


        }

        this.style.color="white";

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

