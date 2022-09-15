$(document).ready(function () {

    //PARALLAX
    var rellax = new Rellax('.rellax', {
        center:true
      });
    //END PARALLAX

    //MOUSE
    magicMouse({
        "cursorOuter": "circle-basic",
        "hoverEffect": "pointer-overlay",
        "hoverItemMove": false,
        "defaultCursor": false,
        "outerWidth": 41,
        "outerHeight": 41
    });
    //END MOUSE

    //AUDIO
    var sound = document.getElementById("bgAudio");
    $(document).on("scroll", function () {

        //play and unmute 
        if (sound.paused) {
            sound.play();
            sound.muted = false;
        }

        //increase / decrease sound depending on scroll 
        if (window.pageYOffset < 2000) {
            sound.volume = (window.pageYOffset / 2000)
        } else {
            sound.volume = 1;
        }
        //END AUDIO
    });
});


