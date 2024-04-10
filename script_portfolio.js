(() => {
    function overlay1On() {
        document.getElementById("overlay1").style.display = "block";
        setTimeout(() => {
            document.getElementById("overlay1").style.opacity = "1";
        }, 10)
        
        document.getElementById("overlay1").style.transition = "opacity 0.25s";

        document.getElementById("body").style.overflow = "hidden";
    }

    function overlay1Off() {
        document.getElementById("overlay1").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("overlay1").style.display = "none";
        }, 250);

        document.getElementById("body").style.overflow = "visible";
    }

    function overlay2On() {
        document.getElementById("overlay2").style.display = "block";
        setTimeout(() => {
            document.getElementById("overlay2").style.opacity = "1";
        }, 10)
        
        document.getElementById("overlay2").style.transition = "opacity 0.25s";

        document.getElementById("body").style.overflow = "hidden";
    }

    function overlay2Off() {
        document.getElementById("overlay2").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("overlay2").style.display = "none";
        }, 250);

        document.getElementById("body").style.overflow = "visible";
    }

    function overlay5On() {
        document.getElementById("overlay5").style.display = "block";
        setTimeout(() => {
            document.getElementById("overlay5").style.opacity = "1";
        }, 10)
        
        document.getElementById("overlay5").style.transition = "opacity 0.25s";

        document.getElementById("body").style.overflow = "hidden";
    }

    function overlay5Off() {
        document.getElementById("overlay5").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("overlay5").style.display = "none";
        }, 250);

        document.getElementById("body").style.overflow = "visible";
    }

    $('#mainProjectDiv').click(overlay1On);

    $('#closeOverlay1').click(overlay1Off);

    $('#project1').click(overlay2On);

    $('#closeOverlay2').click(overlay2Off);

    $('#project4').click(overlay5On);

    $('#closeOverlay5').click(overlay5Off);
})();