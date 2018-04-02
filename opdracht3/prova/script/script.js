var harmonica = document.getElementsByClassName("harmonica");

for (var i = 0; i < harmonica.length; i++) {
    harmonica[i].onclick = function () {
        
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            //harmonica is nu open, dicht maar!
            content.style.maxHeight = null;

        } else {
            //harmonica is dicht, openen!
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}